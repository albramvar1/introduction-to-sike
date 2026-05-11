package us.etsii.albramvar1.introduction.sike;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNull;

@SpringBootTest
@RunWith(SpringRunner.class)
public class SikeServiceTests {

    @Autowired
    protected SikeService sikeService;

    @Test
    public void shouldGenerateValidKeyPair() {
        SikeEntity sikeEntity = sikeService.generateKeyPair("Hello, world!");
        assertNotNull(sikeEntity);
    }

    @Test
    public void shouldCorrectlyEncodeMessage() {
        SikeEntity baseSikeEntity = sikeService.generateKeyPair("Hello, world!");
        SikeEntity sikeEntity = new SikeEntity(baseSikeEntity.getKey(), baseSikeEntity.getKeyBytes(), "Hello, world!");
        sikeEntity = sikeService.encode(sikeEntity);

        assertEquals(sikeEntity.getOriginalMessage().length(), sikeEntity.getEncodedMessage().length);
        assertNull(sikeEntity.getDecodedMessage());
    }

    @Test
    public void shouldCorrectlyDecodeMessage() {
        SikeEntity baseSikeEntity = sikeService.generateKeyPair("Hello, world!");
        SikeEntity sikeEntity = new SikeEntity(baseSikeEntity.getKey(), baseSikeEntity.getKeyBytes(), "Hello, world!");
        sikeEntity = sikeService.encode(sikeEntity);
        sikeEntity = sikeService.decode(sikeEntity);

        assertNotNull(sikeEntity.getDecodedMessage());
        assertEquals(sikeEntity.getOriginalMessage(), sikeEntity.getDecodedMessage());
    }
}