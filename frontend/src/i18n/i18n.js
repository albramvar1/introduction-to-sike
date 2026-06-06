import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    .use(LanguageDetector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        debug: true,
        lng: 'en',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        resources: {
            en: {
                translation: {
                    currentLanguage: "en",
                    navbar: {
                        home: "Home",
                        protocols: "Protocols",
                        proofOfIdentity: "Zero-knowledge proof of identity",
                        keyExchange: "Key exchange",
                        encryption: "Encryption and decryption",
                        about: "About",
                    },
                    about: {
                        title: "About",
                        subtitle: "This project was carried out as a TFG for the University of Seville. For more information please refer to Alba Ramos Vargas, who created this page, or José Andrés Armario Sampalo, who tutored it.",
                        links: {
                            title: "Links of interest",
                            sike: "SIKE official page",
                            sikeJava: "Repository on Github of the Java implementation of SIKE",
                            tfg: "Repository on Github of this page"
                        },
                        articles: {
                            title: "Relevant articles",
                            towards: "Towards quantum-resistant cryptosystems from supersingular elliptic curve isogenies",
                            beginners: "Supersingular isogeny key exchange for beginners",
                            efficientAttack: "An efficient key recovery attack on SIDH"
                        }
                    },
                    hero: {
                        title: "Introduction to ",
                        description: "An intuitive and graphic explanation of the protocol, its functioning and its mathematical basis.",
                    },
                    protocols: {
                        title: "Protocols",
                        proofOfIdentity: {
                            title: "Zero-knowledge proof of identity",
                            description: "How do we prove who we are? Discover the basis of SIKE.",
                        },
                        keyExchange: {
                            title: "Key exchange",
                            description: "Similarly structured as Diffie-Hellman, this key exchange protocol makes the most of today's cryptography.",
                        },
                        encryption: {
                            title: "Encryption and decryption",
                            description: "A real-life use of the protocol.",
                        },
                    },
                    protocolView: {
                        start: "start!",
                        end: {
                            part1: "and that'd be all!",
                            part2: "hope you've enjoyed this presentation",
                        },
                    },
                    proofOfIdentity: {
                        step1: {
                            part1: "This diagram is the base of the zero-knowledge proof of identity that SIKE uses. The nodes are elliptic curves and the arrows between them are isogenies we compute from them.",
                            part2: "The question then is, which arrows of the diagram can we reveal without compromising our secret ",
                        },
                        step2: {
                            part1: {
                                part1: "It cannot be neither ",
                                part2: " nor ",
                            },
                            part2: "SIKE chose ",
                        },
                        step3: {
                            part1: "Alice chooses a random point ",
                            part2: " and computes a concrete instance of the diagram we showed before.",
                        },
                        step4: "She sends Bob two of the nodes and waits to see how he answers.",
                        step5: "He returns Alice a random bit ",
                        step6: {
                            conditional: {
                                part1: "If ",
                                part2: "Alice reveals ",
                                part3: " and ",
                            },
                            end: "Either way, Bob manages to complete the diagram.",
                        },
                    },
                    keyExchange: {
                        step1: {
                            part1: "The public parameters to establish a secure connections are:",
                            part2: "A big prime number ",
                            part3: "An initial elliptic curve defined from the finite group ",
                            part4: "A pair of initial points ",
                            part5: " for each Alice and Bob, respectively.",
                        },
                        step2: {
                            part1: "This is the 2-isogeny graph for the prime number ",
                            part2: "This graph represents elliptic curves as the nodes (grouped by a characteristic of them called ",
                            jInvariant: "j-invariant",
                            part3: ") and the isogenies between these curves as the edges.",
                            problematic: "Why is this graph so important?",
                            part4: "Because it will allow us to visualize ",
                            how: "how",
                            part5: " the SIKE protocol works.",
                            part6: "As we've already established, the prime we've chosen was ",
                            part7: "The exact bases and exponents used to calculate the prime are incredibly important because they set how the user will have to move through the graph.",
                            part8: "This means Alice will have to travel through 4 nodes in the 2-isogeny graph, and Bob will have to travel through 3 nodes in the 3-isogeny graph (or viceversa).",
                            part9: "This means that from the public initial elliptic curve ",
                            part10: ", Alice and Bob reach a different intermediate isogeny ",
                            part11: ", respectively.",
                        },
                        step3: {},
                        step4: {
                            part1: "Alice sends the image of Bob's public initial points using her newly found isogeny ",
                            part2: ". Ídem with Bob, although using Alice's public initial points and his found isogeny ",
                        },
                        step5: "And then, we continue the journey through the graph!",
                        step6: {
                            part1: "And we arrive to the same elliptic curve ",
                            part2: " whose invariant will function as the shared secret key.",
                        },
                        step7: "To finally secure our communication channels.",
                    },
                    encryption: {
                        step1: {
                            title: "Let's try it out!",
                            subtitle: "Write a message to Bob",
                        },
                        step2: "Generate new key",
                        step3: {
                            part1: "First, Bob sends his ",
                            part2: "PUBLIC KEY",
                            part3: " to Alice.",
                        },
                        step4: "Then, Alice encodes the message...",
                        step5: {
                            part1: "...and she sends the ",
                            part2: "ENCODED MESSAGE",
                            part3: " to Bob.",
                        },
                        step6: "Finally, Bob decodes the message to get the original.",
                    },
                    footer: {
                        title: "Introduction to SIKE",
                        subtitle: "A dissertation by ",
                    },
                }
            },
            es: {
                translation: {
                    currentLanguage: "es",
                    navbar: {
                        home: "Inicio",
                        protocols: "Protocolos",
                        proofOfIdentity: "Prueba de identidad",
                        keyExchange: "Intercambio de claves",
                        encryption: "Cifrado y descifrado",
                        about: "Sobre nosotros",
                    },
                    about: {
                        title: "Sobre nosotros",
                        subtitle: "Este proyecto ha sido realizado como un trabajo fin de grado (TFG) de la Universidad de Sevilla. Para más información, por favor contactad con Alba Ramos Vargas, quien creó esta página, o José Andrés Armario Sampalo, que fue el tutor.",
                        links: {
                            title: "Enlaces de interés",
                            sike: "Página oficial de SIKE",
                            sikeJava: "Repositorio de la implementación en Java de SIKE",
                            tfg: "Repositorio de este proyecto"
                        },
                        articles: {
                            title: "Artículos relevantes",
                            towards: "Hacia criptosistemas resistentes al problema cuántico desde las isogenias de curvas supersingulares",
                            beginners: "Intercambio de clave con isogenias supersingulares para principiantes",
                            efficientAttack: "Un ataque efectivo sobre SIDH"
                        }
                    },
                    hero: {
                        title: "Introducción a ",
                        description: "Una explicación intuitiva y gráfica del protocolo, su funcionamiento y sus bases matemáticas.",
                    },
                    protocols: {
                        title: "Protocolos",
                        proofOfIdentity: {
                            title: "Prueba de identidad",
                            description: "¿Cómo probamos que somos quienes decimos ser? Descubre la base de SIKE.",
                        },
                        keyExchange: {
                            title: "Intercambio de claves",
                            description: "Estructurado de manera similar a Diffie-Hellman, este protocolo aprovecha lo mejor de la criptografía actual.",
                        },
                        encryption: {
                            title: "Cifrado y descifrado",
                            description: "Un caso de uso real del protocolo.",
                        },
                    },
                    protocolView: {
                        start: "¡empezar!",
                        end: {
                            part1: "¡eso es todo!",
                            part2: "espero que hayas disfrutado de la presentación",
                        },
                    },
                    proofOfIdentity: {
                        step1: {
                            part1: "Este diagrama es la base de la prueba de identidad con conocimiento cero que utiliza SIKE. Los nodos son curvas elípticas y las flechas son isogenias que calculamos a partir de estas curvas.",
                            part2: "La pregunta entonces es, ¿qué flechas puedo desvelar sin comprometer el secreto ",
                        },
                        step2: {
                            part1: {
                                part1: "No puede ser ",
                                part2: " ni ",
                            },
                            part2: "SIKE eligió ",
                        },
                        step3: {
                            part1: "Alice elige un punto cualquiera ",
                            part2: " y calcula una instancia concreta del diagrama que hemos enseñado anteriormente.",
                        },
                        step4: "Envía a Bob dos de los nodos y espera a ver qué le responde Bob.",
                        step5: "Bob le envía a Alice un bit aleatorio ",
                        step6: {
                            conditional: {
                                part1: "Si ",
                                part2: "Alice revela ",
                                part3: " y ",
                            },
                            end: "De cualquier manera, Bob consigue reconstruir el diagrama.",
                        },
                    },
                    keyExchange: {
                        step1: {
                            part1: "Los parámetros públicos para establecer una conexión segura son:",
                            part2: "Un primo grande ",
                            part3: "Una curva elíptica inicial escogida del grupo finito ",
                            part4: "Un par de pares de puntos iniciales ",
                            part5: " para Alice y Bob, respectivamente.",
                        },
                        step2: {
                            part1: "Este es el grafo de 2-isogenias para el primo ",
                            part2: "El grafo representa curvas elípticas como sus nodos (agrupados por una característica conocida como ",
                            jInvariant: "j-invariante",
                            part3: ") y la existencia de isogenias entre curvas elípticas como sus aristas.",
                            problematic: "¿Por qué es este grafo importante?",
                            part4: "Porque nos permitirá visualizar ",
                            how: "cómo",
                            part5: " el protocolo SIKE funciona.",
                            part6: "Como ya hemos establecido, el primo que hemos escogido es ",
                            part7: "La factorización exacta del primo es extremadamente importante porque nos indicará cómo el usuario deberá moverse sobre el grafo.",
                            part8: "Esta factorización nos indica que Alice deberá pasar por 4 nodos en el grafo de 2-isogenias y que Bob deberá pasar por 3 nodos en el grafo de 3-isogenias, o viceversa.",
                            part9: "De aquí obtenemos que a partir de la curva elíptica pública inicial ",
                            part10: ", Alice y Bob llegarán a curvas elípticas intermedias distintas ",
                            part11: ", respectivamente.",
                        },
                        step3: {},
                        step4: {
                            part1: "Alice le envía a Bob la imagen de sus puntos iniciales usando su nueva isogenia ",
                            part2: ". Bob hace lo mismo sólo que usando los puntos iniciales de Alice y su isogenia ",
                        },
                        step5: "Y el viaje por el grafo continúa.",
                        step6: {
                            part1: "Finalmente llegamos a la misma curva elíptica ",
                            part2: " cuyo invariante funcionará de secreto compartido.",
                        },
                        step7: "Para asegurar los canales de comunicación.",
                    },
                    encryption: {
                        step1: {
                            title: "¡Vamos a probarlo!",
                            subtitle: "Escríbele un mensaje a Bob",
                        },
                        step2: "Generar nueva clave",
                        step3: {
                            part1: "Primero, Bob envía su ",
                            part2: "CLAVE PÚBLICA",
                            part3: " a Alice.",
                        },
                        step4: "Luego, Alice cifra el mensaje...",
                        step5: {
                            part1: "...y envía el ",
                            part2: "MENSAJE CIFRADO",
                            part3: " a Bob.",
                        },
                        step6: "Finalmente, Bob descifra el mensaje y obtiene el original.",
                    },
                    footer: {
                        title: "Introducción a SIKE",
                        subtitle: "Un TFG por ",
                    },
                }
            }
        }
    });

export default i18n;