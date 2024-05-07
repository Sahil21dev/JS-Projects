import java.util.*;
class demo{
    public static void main(String[] args) {
        // int arr1[]={1,2,2,1};
        // int arr2[]={2,2};
        // System.out.println(Arrays.toString(intersection(arr1,arr2)));
        // HashMap<Integer, Integer> map = new HashMap<>();
        // map.put(1,1);
        // map.put(2,2);
        // map.put(3,3);
        // map.put(1,4);
        // map.put(4,5);
        // map.put(5,6);
        // System.out.println(map.entrySet());
        
    //     System.out.println(map.entrySet());
    //     map.remove(1);
    //     System.out.println(map.entrySet());
    // char c = 'A';
    // for(int i = 1;i<=26;i++){
    //     map.put(i,Character.toString(c));
    //     c++;
    // }
    // // }
    // System.out.println(map);
    // String s = map.get(1);
    // System.out.println(s)

// static int[] intersection(int[] nums1, int[] nums2) {
//         HashSet<Integer> set1=new HashSet<>();
//         HashSet<Integer> set2=new HashSet<>();
//         for(int i=0;i<nums1.length;i++){
//             set1.add(nums1[i]);
//         }
//         for(int i=0;i<nums2.length;i++){
//             if(set1.contains(nums2[i]))
//             set2.add(nums2[i]);
//         }
//         System.out.println(set2);
//          int[] array = new int[set2.size()];
//         int index = 0;
//         for (Integer element : set2) {
//             array[index++] = element.intValue();
//         }
//         return array;
        //  Integer[] array = set2.toArray(new Integer[set2.size()]);
        //  System.out.println(array);
        //   int[] intArray = new int[array.length];
        // for (int i = 0; i < array.length; i++) {
        //     intArray[i] = array[i].intValue();
        // }
        // System.out.println(intArray);
        // return intArray;
    //    String[] arr={"a","b","c","d"};
    //    System.out.println(Arrays.toString(arr));
    //     ArrayList<String> list = new ArrayList<>(Arrays.asList(arr));
    //     System.out.println(list.size());
    ArrayList<List<String>> result=new ArrayList<>();
    String[] arr={"eat","tea","tan","ate","nat","bat"};
    result = groupAnagrams(arr);
    }
    static ArrayList<List<String>> groupAnagrams(String[] strs) {
        ArrayList<List<String>> result=new ArrayList<>();
        ArrayList<String> list=new ArrayList<>();
        ArrayList<String> list1 = new ArrayList<>(Arrays.asList(strs));
        String str1 = "", str2="", str3="";
        while(list1.size()!=0){
        str1 = sort(list1.get(0));
        list.add(str1);
        for(int i = 1; i<list1.size();i++){
            str2 = list1.get(i);
            str3 = sort(str2);
            if(str1.equals(str3)){
            list.add(str2);
            list1.remove(str2);
        }
     }
     list1.remove(str1);
     str1="";
     str2="";
     str3="";
     result.add(list);
     list.clear();
    }
    return result;
    }
    static String sort(String str){
        char[] charArr = str.toCharArray();
        Arrays.sort(charArr);
        String sortStr = new String(charArr);
        return sortStr;
    }

}
