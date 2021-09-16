//
//  main.cpp
//  CodeChallenge
//
//  Created by Morgan Robinson on 9/7/21.
//

#include <iostream>
#include <vector>
using namespace std;
bool checkDistinct(vector<int> vec, int n);
int main(int argc, const char * argv[]) {
    int stocksprofit [] = {5,7,9,13,11,6,6,3,3};
    int target = 12;
    int numberOfDistinctPairs = 0;
    
    int sizeOfArray = 9;
    vector<int>nums;
    
    for(int i = 0; i < 9;i++)
    {
        for(int j = i + 1; j < sizeOfArray ;j++)
        {
            if(stocksprofit[i] + stocksprofit[j] == target && checkDistinct(nums, stocksprofit[i]) == true)
            {
                numberOfDistinctPairs = numberOfDistinctPairs + 1;
                nums.push_back(stocksprofit[i]);
                nums.push_back(stocksprofit[j]);
            }
        }
    }
    
    
    cout<< "the number of distinct pairs is: " << numberOfDistinctPairs << endl;
    

}

bool checkDistinct(vector<int> vec, int n){
    for(int i= 0; i < vec.size(); i++)
    {
        if(vec[i] == n)
        {
            return false;
        }
    }
    
    return true;
}
