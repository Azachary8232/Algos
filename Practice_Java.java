import java.util.*;
import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.concurrent.*;
import java.util.function.*;
import java.util.regex.*;
import java.util.stream.*;
import static java.util.stream.Collectors.joining;
import static java.util.stream.Collectors.toList;








public class Practice_Java {
    public static void main(String[] args) {

        String keywords = "Dog cat girl freak chair";
        String querySearch = "";
        
        for( int i = 0; i < keywords.length(); i++){
            char check = keywords.charAt(i);
            if( Character.isWhitespace(check)) {
                querySearch += " OR ";
            }
            else{
                querySearch += check;
                System.out.println(querySearch);
            }
        }
    }    
    
}    



