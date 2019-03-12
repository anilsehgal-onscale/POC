package sample;

import com.teamdev.jxbrowser.chromium.Browser;
import com.teamdev.jxbrowser.chromium.javafx.BrowserView;
import javafx.application.Application;
import javafx.application.Platform;
import javafx.geometry.Rectangle2D;
import javafx.scene.Scene;
import javafx.scene.image.Image;
import javafx.scene.layout.BorderPane;
import javafx.scene.paint.Color;
import javafx.scene.text.Text;
import javafx.stage.Screen;
import javafx.stage.Stage;

import java.net.HttpURLConnection;
import java.net.URL;

public class Main extends Application {
    private Scene scene;
    private Text text;
    private String url;
    private Browser browser;
    private static final String remoteUrl = "http://18.222.230.128:8080";
    private static final String localUrl = "http://localhost:8080";
    @Override
    public void start(Stage stage) throws Exception{
        Platform.setImplicitExit(true);
        stage.setTitle("OnScale Desktop POC");
        stage.getIcons().add(new Image(Main.class.getResourceAsStream("icon.png")));
        Rectangle2D primaryScreenBounds = Screen.getPrimary().getVisualBounds();
        double width = primaryScreenBounds.getWidth()/1.5;
        double height = primaryScreenBounds.getHeight()/1.5;

        stage.setWidth(width);
        stage.setHeight(height);
        text = new Text("");
        text.setFill(Color.BLACK);
        text.setStyle("-fx-background-color: #FFFFFF;");

        BorderPane border = new BorderPane();
        browser = new Browser();
        BrowserView view = new BrowserView(browser);
        border.setCenter(view);
        border.setBottom(text);

        scene = new Scene(border, width, height);
        stage.setScene(scene);
        stage.show();
        load();

    }

    public static void main(String[] args) {
        launch(args);
    }

    private void load() {
        text.setText("Connecting..");
        url = remoteUrl;
        try {
            boolean b = canReachServer(remoteUrl);
            if (!b) {
                url = localUrl;
                text.setText("Running Local Server");
            } else {
                text.setText("Running Remote Server");
            }
        } catch (Exception e) {
            url = localUrl;
            text.setText("Running Local Server");
        }
        browser.loadURL(url);
    }
    private boolean canReachServer(String url) throws Exception {
        URL u = new URL ( url );
        HttpURLConnection huc =  ( HttpURLConnection )  u.openConnection ();
        huc.setRequestMethod ("GET");  //OR  huc.setRequestMethod ("HEAD");
        huc.setReadTimeout(2000);
        huc.setConnectTimeout(2000);
        huc.connect () ;
        int code = huc.getResponseCode() ;
        huc.disconnect();
        return code == HttpURLConnection.HTTP_OK;
    }
}