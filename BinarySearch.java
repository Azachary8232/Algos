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

    public static int binarySearch(List<Integer> arr, int target){
        return binarySearchHelper(arr, target, 0 , arr.size() - 1);
    }

    public static int binarySearchHelper(List<Integer> arr, int target, int left, int right){
        if(left > right){
            return 0;
        }
        
        double mid = Math.floor((left + right) / 2);
        int newMid = (int)mid;
        if( target == arr.get(newMid)){
            return newMid;
        }
        else if( target < arr.get(newMid)){
            return binarySearchHelper(arr, target, left, newMid - 1);
        }
        else{
            return binarySearchHelper(arr, target, newMid + 1 , right);
        }
    }








    // public static int binarySearch(List<Integer> arr , int target){
    //     int left = 0;
    //     int right = arr.size() - 1;
    //     while (left < right){
    //         double mid  = Math.floor((left + right) / 2);
    //         int newMid = (int)mid;
    //         if(target == arr.get(newMid)){
    //             return newMid;
    //         }
    //         else if( target < arr.get(newMid)){
    //             right = newMid - 1;         
    //         }
    //         else{
    //             left = newMid + 1;
    //         }
    //     }
    //     return 0;
    // }
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
