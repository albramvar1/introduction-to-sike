package us.etsii.albramvar1.introduction.sike;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SikeEntity {
    // key values
    private String key;
    private byte[] keyBytes;

    // message values
    private String originalMessage = "";
    private String encodedMessage = "";
    private byte[] encodedMessageBytes = new byte[]{};
    private String decodedMessage = "";

    public SikeEntity(String key, byte[] keyBytes) {
        this.key = key;
        this.keyBytes = keyBytes;
    }
}
