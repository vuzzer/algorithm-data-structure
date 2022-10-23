#include <stdio.h>
#define N 1000

main(){
    int t, p, q, id[N];
    for(int i = 0; i < N; i++) id[i] = i;

    while (scanf("%d %d",&p, &q) == 2)
    {
        if (id[p] == id[q]) continue;
        for (int t = id[p], i = 0; i < N ; i++)
        {
            if(t == id[i]) id[i] = id[q];
        }

        printf("sortie : %d %d\n",p, q);
        
    }
    
}
