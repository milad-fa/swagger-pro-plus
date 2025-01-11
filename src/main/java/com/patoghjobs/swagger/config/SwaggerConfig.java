package com.patoghjobs.swagger.config;

import io.swagger.v3.oas.models.Components;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.License;
import io.swagger.v3.oas.models.security.SecurityRequirement;
import io.swagger.v3.oas.models.security.SecurityScheme;
import jakarta.annotation.PostConstruct;
import org.springdoc.core.models.GroupedOpenApi;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class SwaggerConfig implements WebMvcConfigurer {

    @Value("${spring.application.name:Swagger Pro Plus}")
    private String applicationName;

    @Value("${spring.application.version:1.0}")
    private String applicationVersion;

    @PostConstruct
    public void injectJavaScript() {
        // Inject JavaScript logging
        String jsCode = """
                <script>
                console.log('Swagger Configuration Initialized');
                const apiConfig = {
                    appName: '%s',
                    version: '%s',
                    
                    logConfig() {
                        console.log('API Configuration:', {
                            title: this.appName,
                            version: this.version,
                            description: 'RESTful API Documentation',
                            contact: {
                                name: 'Development Team',
                                email: 'team@example.com',
                                url: 'https://example.com'
                            },
                            license: {
                                name: 'Apache 2.0',
                                url: 'https://www.apache.org/licenses/LICENSE-2.0'
                            }
                        });
                    }
                };
                
                // Log configuration on page load
                window.addEventListener('load', () => {
                    apiConfig.logConfig();
                    console.log('API Groups:', {
                        group: 'public-api',
                        pathsToMatch: '/api/**',
                        packagesToScan: 'com.example.demo.controller'
                    });
                });
                </script>
                """.formatted(applicationName, applicationVersion);

        System.out.println("JavaScript logging code injected");
    }

    @Bean
    public OpenAPI customOpenAPI() {
        return new OpenAPI()
                .info(new Info()
                        .title("Swagger Pro Plus")
                        .version("1.0.0")
                        .description("Enhanced Swagger UI with custom token management and smart request history capabilities")
                        .termsOfService("https://patoghjobs.com/swagger-terms.html")
                        .contact(new Contact()
                                .name("Development Team")
                                .email("dev@patoghjobs.com")
                                .url("https://patoghjobs.com"))
                        .license(new License()
                                .name("Apache 2.0")
                                .url("https://www.apache.org/licenses/LICENSE-2.0")))
                .addSecurityItem(new SecurityRequirement().addList("bearerAuth"))
                .components(new Components()
                        .addSecuritySchemes("bearerAuth",
                                new SecurityScheme()
                                        .name("bearerAuth")
                                        .type(SecurityScheme.Type.HTTP)
                                        .scheme("bearer")
                                        .bearerFormat("JWT")));
    }

    @Bean
    public GroupedOpenApi publicApi() {
        return GroupedOpenApi.builder()
                .group("public-api")
                .pathsToMatch("/api/**")
                .packagesToScan("com.patoghjobs.swagger.controller")
                .build();
    }


}