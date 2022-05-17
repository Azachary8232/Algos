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

    public static double binarySearch(List<Integer> arr , int target){
        int left = 0;
        int right = arr.size() - 1;
        while (left < right){
            double mid  = Math.floor((left + right) / 2);
            if(target == arr.get((int)mid)){
                return mid;
            }
            else if( target < arr.get((int)mid)){
                right = (int)mid - 1;         
            }
            else{
                left = (int)mid + 1;
            }
        }
        return 0;
    }
}



public class BinarySearch {
    public static void main(String[] args) {
        ArrayList<Integer> newArry = new ArrayList<>();
        newArry.add(2);
        newArry.add(7);
        newArry.add(8);
        newArry.add(9);
        newArry.add(10);
        newArry.add(13);
        newArry.add(17);
        newArry.add(19);
        newArry.add(21);

    
        System.out.println(Result.binarySearch(newArry, 19 ));

    }     
}
