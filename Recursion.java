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

    public static int recursion(int n){

        if( n == 1){
            return 1;
        }

        return n * recursion( n - 1);
    }

}





public class Recursion {
    public static void main(String[] args) {

    System.out.println(Result.recursion(5));
    }    

}   