package com.telemedicina.app.config;

import com.google.api.client.auth.oauth2.Credential;
import com.google.api.client.extensions.java6.auth.oauth2.AuthorizationCodeInstalledApp;
import com.google.api.client.extensions.jetty.auth.oauth2.LocalServerReceiver;
import com.google.api.client.googleapis.auth.oauth2.GoogleAuthorizationCodeFlow;
import com.google.api.client.googleapis.auth.oauth2.GoogleClientSecrets;
import com.google.api.client.googleapis.javanet.GoogleNetHttpTransport;
import com.google.api.client.http.javanet.NetHttpTransport;
import com.google.api.client.json.JsonFactory;
import com.google.api.client.json.jackson2.JacksonFactory;
import com.google.api.client.util.store.FileDataStoreFactory;
import com.google.api.services.calendar.Calendar;
import com.google.api.services.calendar.CalendarScopes;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.security.GeneralSecurityException;
import java.util.Arrays;
import java.util.List;


/**
 *
 * @author oliver
 */
public class GoogleCalendarConfig {
    
    private static final String APPLICATION_NAME = "Telemedicina";
    private static final JsonFactory JSON_FACTORY = JacksonFactory.getDefaultInstance();
    private static final String TOKENS_DIRECTORY_PATH = "tokens";
    
    private static final List<String> SCOPES = Arrays.asList(CalendarScopes.CALENDAR, CalendarScopes.CALENDAR_EVENTS);
    //private static final String CREDENTIALS_FILE_PATH = 
            //"/src/main/resources/client_secret_306263743918-o0kl875m71vh0mj0p174tng345e9d89k.apps.googleusercontent.com.json";
    
    public static Credential getCredentials(final NetHttpTransport HTTP_TRANSPORT) throws IOException{
        
        InputStream in = GoogleCalendarConfig.class
                .getResourceAsStream("/client_secret_306263743918-o0kl875m71vh0mj0p174tng345e9d89k.apps.googleusercontent.com.json");
        
        if (in == null) {
            throw new FileNotFoundException("El recurso no fue encontrado: " + in);
        }
        
        //Cargamos lo que se conoce como secretos del cliente
        GoogleClientSecrets clientSecrets = GoogleClientSecrets.load(JSON_FACTORY, new InputStreamReader(in));
        
        
        //Flujo de autorizacion
        GoogleAuthorizationCodeFlow flow = new GoogleAuthorizationCodeFlow.Builder(
                HTTP_TRANSPORT, JSON_FACTORY, clientSecrets, SCOPES)
                .setDataStoreFactory(new FileDataStoreFactory(new File(TOKENS_DIRECTORY_PATH)))
                .setAccessType("offline")
                .build();
        
        LocalServerReceiver receiver = new LocalServerReceiver.Builder()
                .setPort(8888).build();
        
        return new AuthorizationCodeInstalledApp(flow, receiver).authorize("user");
    }
    
    public static Calendar getCalendarService() throws GeneralSecurityException, IOException{
        final NetHttpTransport HTTP_TRANSPORT = GoogleNetHttpTransport.newTrustedTransport();
        return new Calendar.Builder(HTTP_TRANSPORT, JSON_FACTORY, getCredentials(HTTP_TRANSPORT))
                .setApplicationName(APPLICATION_NAME)
                .build();
    }
    
    
}
