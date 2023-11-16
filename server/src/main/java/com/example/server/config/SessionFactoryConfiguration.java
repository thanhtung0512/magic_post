package com.example.server.config;

import org.hibernate.SessionFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.example.server.utilities.HibernateUtil;

@Configuration
public class SessionFactoryConfiguration {

    @Bean(name = "entityManagerFactory")
    public SessionFactory getSessionFactory() {
        return HibernateUtil.getSessionFactory();
    }




}