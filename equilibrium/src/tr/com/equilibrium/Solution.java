package tr.com.equilibrium;

public class Solution {
	public static int solution(int[] A) {
		//0 ile length-1 arasinda bir sayi sec
		for (int i = 0; i < A.length; i++) {
			int sumOfPrev = 0;
			int sumOfNext = 0;
			
			for (int j = 0; j < i; j++) {
				sumOfPrev+=A[j];
				
			}
			
			for (int j = i+1; j < A.length; j++) {
				sumOfNext += A[j];
			}
			
			if (sumOfPrev == sumOfNext){
				return i;
			}
			
		}
        return 0;
    }
	public static void main(String[] args) {
		int[] testAr = {-1,3,-4,5,1,-6,2,1};
		int elem = 5;
		System.out.println(Integer.toString(elem, 2));
		System.out.println("equilibruim is " + solution(testAr));

	}

}
