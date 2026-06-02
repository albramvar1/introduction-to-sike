package us.etsii.albramvar1.introduction.sike;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.ArgumentCaptor;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.webmvc.test.autoconfigure.AutoConfigureMockMvc;
import org.springframework.test.context.bean.override.mockito.MockitoBean;
import org.springframework.test.web.servlet.MockMvc;

import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
public class SikeRestControllerTests {

    private final String ENDPOINT = "/sike/generate-key-pair";
    private final String BASIC_MESSAGE = "Hello, world!";

    @Autowired
    protected SikeRestController sikeController;

    @MockitoBean
    protected SikeService sikeService;

    @Autowired
    private MockMvc mockMvc;

    @BeforeEach
    public void resetMocks() {
        Mockito.reset(sikeService);
    }

    @Test
    public void shouldReturnBadRequest() throws Exception {
        mockMvc.perform(get(ENDPOINT)).andExpect(status().isBadRequest());
    }

    @Test
    public void shouldReturnBadRequestEmptyString() throws Exception {
        mockMvc.perform(get(ENDPOINT).param("message", "")).andExpect(status().isBadRequest());
    }

    @Test
    public void shouldReturnBadRequestBlankString() throws Exception {
        mockMvc.perform(get(ENDPOINT).param("message", " ")).andExpect(status().isBadRequest());
    }

    @Test
    public void shouldNotReturnErrorCode() throws Exception {
        when(sikeService.generateKeyPair(anyString())).thenCallRealMethod();
        mockMvc.perform(get(ENDPOINT).param("message", BASIC_MESSAGE)).andExpect(status().isOk());
    }

    @Test
    public void shouldReturnErrorCode() throws Exception {
        when(sikeService.generateKeyPair(anyString())).thenReturn(null);
        mockMvc.perform(get(ENDPOINT).param("message", BASIC_MESSAGE)).andExpect(status().isInternalServerError());

        ArgumentCaptor<String> captor = ArgumentCaptor.forClass(String.class);
        verify(sikeService).generateKeyPair(captor.capture());
    }
}