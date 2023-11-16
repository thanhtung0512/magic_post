package com.example.server.config;

import javax.sql.DataSource;

import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;


@Configuration
public class DataSourceConfiguration {
    @Bean
    public DataSource getDataSource() {
        return DataSourceBuilder.create()
                .driverClassName("com.mysql.cj.jdbc.Driver")
                .url("jdbc:mysql://bblipzsuaomfkih4bdzx-mysql.services.clever-cloud.com:3306/bblipzsuaomfkih4bdzx")
                .username("utxn8kpxkal81q5c")
                .password("3NasSaj0OS8vmH9ZpPbY")
                .build();
    }
}
