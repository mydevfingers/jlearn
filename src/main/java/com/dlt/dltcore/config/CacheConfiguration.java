package com.dlt.dltcore.config;

import io.github.jhipster.config.JHipsterProperties;
import org.ehcache.config.builders.CacheConfigurationBuilder;
import org.ehcache.config.builders.ResourcePoolsBuilder;
import org.ehcache.expiry.Duration;
import org.ehcache.expiry.Expirations;
import org.ehcache.jsr107.Eh107Configuration;

import java.util.concurrent.TimeUnit;

import org.springframework.boot.autoconfigure.cache.JCacheManagerCustomizer;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.context.annotation.*;

@Configuration
@EnableCaching
public class CacheConfiguration {

    private final javax.cache.configuration.Configuration<Object, Object> jcacheConfiguration;

    public CacheConfiguration(JHipsterProperties jHipsterProperties) {
        JHipsterProperties.Cache.Ehcache ehcache =
            jHipsterProperties.getCache().getEhcache();

        jcacheConfiguration = Eh107Configuration.fromEhcacheCacheConfiguration(
            CacheConfigurationBuilder.newCacheConfigurationBuilder(Object.class, Object.class,
                ResourcePoolsBuilder.heap(ehcache.getMaxEntries()))
                .withExpiry(Expirations.timeToLiveExpiration(Duration.of(ehcache.getTimeToLiveSeconds(), TimeUnit.SECONDS)))
                .build());
    }

    @Bean
    public JCacheManagerCustomizer cacheManagerCustomizer() {
        return cm -> {
            cm.createCache(com.dlt.dltcore.repository.UserRepository.USERS_BY_LOGIN_CACHE, jcacheConfiguration);
            cm.createCache(com.dlt.dltcore.repository.UserRepository.USERS_BY_EMAIL_CACHE, jcacheConfiguration);
            cm.createCache(com.dlt.dltcore.domain.User.class.getName(), jcacheConfiguration);
            cm.createCache(com.dlt.dltcore.domain.Authority.class.getName(), jcacheConfiguration);
            cm.createCache(com.dlt.dltcore.domain.User.class.getName() + ".authorities", jcacheConfiguration);
            cm.createCache(com.dlt.dltcore.domain.Discipline.class.getName(), jcacheConfiguration);
            cm.createCache(com.dlt.dltcore.domain.Discipline.class.getName() + ".resources", jcacheConfiguration);
            cm.createCache(com.dlt.dltcore.domain.Discipline.class.getName() + ".programs", jcacheConfiguration);
            cm.createCache(com.dlt.dltcore.domain.Program.class.getName(), jcacheConfiguration);
            cm.createCache(com.dlt.dltcore.domain.Program.class.getName() + ".resources", jcacheConfiguration);
            cm.createCache(com.dlt.dltcore.domain.Program.class.getName() + ".courses", jcacheConfiguration);
            cm.createCache(com.dlt.dltcore.domain.Program.class.getName() + ".disciplines", jcacheConfiguration);
            cm.createCache(com.dlt.dltcore.domain.Course.class.getName(), jcacheConfiguration);
            cm.createCache(com.dlt.dltcore.domain.Course.class.getName() + ".resources", jcacheConfiguration);
            cm.createCache(com.dlt.dltcore.domain.Course.class.getName() + ".lessons", jcacheConfiguration);
            cm.createCache(com.dlt.dltcore.domain.Course.class.getName() + ".programs", jcacheConfiguration);
            cm.createCache(com.dlt.dltcore.domain.Lesson.class.getName(), jcacheConfiguration);
            cm.createCache(com.dlt.dltcore.domain.Lesson.class.getName() + ".resources", jcacheConfiguration);
            cm.createCache(com.dlt.dltcore.domain.Lesson.class.getName() + ".courses", jcacheConfiguration);
            cm.createCache(com.dlt.dltcore.domain.Resource.class.getName(), jcacheConfiguration);
            // jhipster-needle-ehcache-add-entry
        };
    }
}
