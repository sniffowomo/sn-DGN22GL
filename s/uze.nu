def uze [] {
    print ((sys).disks | sort-by free) 
    print ((sys).mem)
} 