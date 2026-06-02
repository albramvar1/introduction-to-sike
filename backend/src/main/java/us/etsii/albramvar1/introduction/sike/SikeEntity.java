package us.etsii.albramvar1.introduction.sike;

import lombok.Getter;
import lombok.Setter;
import org.bouncycastle.crypto.digests.SHAKEDigest;

import java.nio.charset.StandardCharsets;

@Getter
@Setter
public class SikeEntity {
    // key values
    private String key;
    private byte[] keyBytes;

    // message values
    private String originalMessage;
    private byte[] encodedMessage = new byte[]{};
    private String decodedMessage = null;

    public SikeEntity(String key, byte[] keyBytes, String message) {
        this.key = key;
        this.keyBytes = keyBytes;
        this.originalMessage = message;
        this.encodedMessage = encode(this);
        this.decodedMessage = decode(this);
    }

    public byte[] encode(SikeEntity sikeEntity) {
        String message = sikeEntity.getOriginalMessage();
        byte[] messageBytes = message.getBytes(StandardCharsets.UTF_8);

        SHAKEDigest shake = new SHAKEDigest(256);
        byte[] keyBytes = sikeEntity.getKeyBytes();
        shake.update(keyBytes, 0, keyBytes.length);

        byte[] encodedMessage = new byte[messageBytes.length];
        for (int i = 0; i < messageBytes.length; i++) {
            encodedMessage[i] = (byte) (keyBytes[i%16] ^ messageBytes[i]);
        }

        return encodedMessage;
    }

    public String decode(SikeEntity sikeEntity) {
        byte[] encodedMessage = sikeEntity.getEncodedMessage();

        SHAKEDigest shake = new SHAKEDigest(256);
        byte[] keyBytes = sikeEntity.getKeyBytes();
        shake.update(keyBytes, 0, keyBytes.length);

        byte[] decodedMessageBytes = new byte[encodedMessage.length];
        for (int i = 0; i < encodedMessage.length; i++) {
            decodedMessageBytes[i] = (byte) (keyBytes[i%16] ^ encodedMessage[i]);
        }

        return new String(decodedMessageBytes);
    }
}
