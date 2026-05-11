package us.etsii.albramvar1.introduction.sike;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.webmvc.test.autoconfigure.AutoConfigureMockMvc;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@RunWith(SpringRunner.class)
@AutoConfigureMockMvc
public class SikeRestControllerTests {

    private String ENDPOINT = "/sike/generate-key-pair";

    @Autowired
    protected SikeRestController sikeController;

    @Mock
    protected SikeService sikeService;

    @Autowired
    private MockMvc mockMvc;

    @Test
    public void shouldReturnBadRequest() throws Exception {
        mockMvc.perform(get(ENDPOINT)).andExpect(status().isBadRequest());
    }

    @Test
    public void shouldNotReturnErrorCode() throws Exception {
        mockMvc.perform(get(ENDPOINT).param("message", "Hello, world!")).andExpect(status().isOk());
    }
}