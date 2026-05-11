package us.etsii.albramvar1.introduction.sike;

import com.wultra.security.pqc.sike.crypto.KeyGenerator;
import com.wultra.security.pqc.sike.crypto.Sike;
import com.wultra.security.pqc.sike.model.EncapsulationResult;
import com.wultra.security.pqc.sike.model.EncryptedMessage;
import com.wultra.security.pqc.sike.model.ImplementationType;
import com.wultra.security.pqc.sike.model.Party;
import com.wultra.security.pqc.sike.param.SikeParam;
import com.wultra.security.pqc.sike.param.SikeParamP434;
import org.bouncycastle.jce.provider.BouncyCastleProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.nio.charset.StandardCharsets;
import java.security.KeyPair;
import java.security.Security;
import java.util.Arrays;

import org.bouncycastle.crypto.digests.SHAKEDigest;

@Service
public class SikeService {

	@Autowired
	public SikeService() {
        Security.addProvider(new BouncyCastleProvider());
    }

    public SikeEntity generateKeyPair(String message) {
        try {
            SikeParam sikeParam = new SikeParamP434(ImplementationType.OPTIMIZED);
            KeyGenerator keyGenerator = new KeyGenerator(sikeParam);
            KeyPair keyPairB = keyGenerator.generateKeyPair(Party.BOB);

            Sike sike = new Sike(sikeParam);
            EncapsulationResult encapsulationResult = sike.encapsulate(keyPairB.getPublic());

            byte[] secretA = encapsulationResult.getSecret();
            EncryptedMessage encryptedMessage = encapsulationResult.getEncryptedMessage();

            byte[] encodedKeyMessage = encryptedMessage.getEncoded();

            EncryptedMessage transportedMessage = new EncryptedMessage(sikeParam, encodedKeyMessage);
            byte[] secretB = sike.decapsulate(keyPairB.getPrivate(), keyPairB.getPublic(), transportedMessage);

            if (!Arrays.equals(secretA, secretB)) {
                return null;
            }

            String publicKey = keyPairB.getPublic().toString();
            SikeEntity sikeEntity = new SikeEntity(publicKey, secretA, message);

            sikeEntity = encode(sikeEntity);
            sikeEntity = decode(sikeEntity);

            if (!sikeEntity.getOriginalMessage().equals(
                    sikeEntity.getDecodedMessage()
            )) {
               return null;
            }

            return sikeEntity;
        } catch (Exception e) {
            return null;
        }
    }

    public SikeEntity encode(SikeEntity sikeEntity) {
        String message = sikeEntity.getOriginalMessage();
        byte[] messageBytes = message.getBytes(StandardCharsets.UTF_8);

        SHAKEDigest shake = new SHAKEDigest(256);
        byte[] keyBytes = sikeEntity.getKeyBytes();
        shake.update(keyBytes, 0, keyBytes.length);

        byte[] encodedMessage = new byte[messageBytes.length];
        for (int i = 0; i < messageBytes.length; i++) {
            encodedMessage[i] = (byte) (keyBytes[i%16] ^ messageBytes[i]);
        }

        sikeEntity.setEncodedMessage(encodedMessage);

        return sikeEntity;
    }

    public SikeEntity decode(SikeEntity sikeEntity) {
        byte[] encodedMessage = sikeEntity.getEncodedMessage();

        SHAKEDigest shake = new SHAKEDigest(256);
        byte[] publicKeyBytes = sikeEntity.getKeyBytes();
        shake.update(publicKeyBytes, 0, publicKeyBytes.length);

        byte[] decodedMessageBytes = new byte[encodedMessage.length];
        for (int i = 0; i < encodedMessage.length; i++) {
            decodedMessageBytes[i] = (byte) (publicKeyBytes[i%16] ^ encodedMessage[i]);
        }

        sikeEntity.setDecodedMessage(new String(decodedMessageBytes));

        return sikeEntity;
    }
}
