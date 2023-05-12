# This custom command is for seeing free disks and mem only 

def uze [] {
    print ((sys).disks | sort-by free) 
    print ((sys).mem)
} 