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



class Result{

    public static String pangram(String s){
        ArrayList<Character> contains = new ArrayList<>();
        String lower = s.toLowerCase();
        for( int i = 0; i < lower.length(); i++){
            if( (lower.charAt(i) >= 'a' && lower.charAt(i) <= 'z'))
                if( contains.contains(lower.charAt(i))){
                    continue;
                }
                else{
                    contains.add(lower.charAt(i));
                }
        }
        System.out.println(contains);
        System.out.println(contains.size());
        if( contains.size() == 26){
            return "pangram";
        }
        else{
            return "not pangram";
        }
    }
        
}








public class Pangrams {
    public static void main(String[] args) {
        String newString = "We promptly judged antique ivory buckles for the next prize";


        System.out.println(Result.pangram(newString));
    }
}
