
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

    public static int lonelyinteger(List<Integer> a){
        ArrayList<Integer> newArray = new ArrayList<>();
        for( int i = 0; i < a.size(); i++) {
            if(newArray.contains(a.get(i))){
                newArray.remove(a.get(i));
            }
            else{
                newArray.add(a.get(i));
            }
        }
        return newArray.get(0);
    }

}





public class Practice_Java {
    public static void main(String[] args) {
        ArrayList<String> cars = new ArrayList<String>();
        cars.add("Volvo");
        cars.add("BMW");
        cars.add("Ford");
        cars.add("Mazda");
        for (String i : cars) {
        System.out.println(i);
    }    
        System.out.println(cars.contains("Mazda"));
        System.out.println(cars.contains("Dog"));
    }
}    


