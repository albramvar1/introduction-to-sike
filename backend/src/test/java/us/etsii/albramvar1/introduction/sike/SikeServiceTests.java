package us.etsii.albramvar1.introduction.sike;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.mockito.invocation.InvocationOnMock;
import org.mockito.stubbing.Answer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Arrays;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.Assert.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNull;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.doAnswer;
import static org.mockito.Mockito.when;

@SpringBootTest
public class SikeServiceTests {

    private final String MESSAGE = "Hello, world!";

    @Autowired
    protected SikeService sikeService;

    @Test
    public void shouldGenerateValidKeyPair() {
        SikeEntity sikeEntity = sikeService.generateKeyPair(MESSAGE);
        assertNotNull(sikeEntity);
        assertNotNull(sikeEntity.getKey());
        assertNotNull(sikeEntity.getKeyBytes());
        assertNotNull(sikeEntity.getOriginalMessage());
        assertNotNull(sikeEntity.getEncodedMessage());
        assertNotNull(sikeEntity.getDecodedMessage());
    }

    @Test
    public void shouldCorrectlyEncodeMessage() {
        SikeEntity sikeEntity = sikeService.generateKeyPair(MESSAGE);
        assertNotNull(sikeEntity.getEncodedMessage());
        assertEquals(sikeEntity.getOriginalMessage().length(), sikeEntity.getEncodedMessage().length);
    }

    @Test
    public void shouldCorrectlyDecodeMessage() {
        SikeEntity sikeEntity = sikeService.generateKeyPair(MESSAGE);
        assertNotNull(sikeEntity.getDecodedMessage());
        assertEquals(sikeEntity.getOriginalMessage(), sikeEntity.getDecodedMessage());
    }
}