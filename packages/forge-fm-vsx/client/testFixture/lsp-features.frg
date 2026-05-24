// Test file for LSP features
// This file contains various Forge constructs to test:
// - Go to definition
// - Autocomplete
// - Hover information
// - Document symbols

/**
 * A person in the social network
 */
abstract sig Person {
    friends: set Person,
    age: one Int
}

/**
 * A student at the university
 */
sig Student extends Person {
    courses: set Course
}

/**
 * A teacher at the university
 */
sig Teacher extends Person {
    teaches: set Course
}

/**
 * A course at the university
 */
sig Course {
    enrolled: set Student,
    instructor: one Teacher
}

/**
 * Checks if the network is well-formed
 * @param p - the person to check
 */
pred wellFormed[p: Person] {
    // No self-loops in friendship
    p not in p.friends
    // Friendship is symmetric
    all other: Person | other in p.friends implies p in other.friends
}

/**
 * Predicate to check if a person is popular
 */
pred popular[p: Person] {
    #(p.friends) > 3
}

/**
 * Function to get all friends of a person
 */
fun getFriends[p: Person]: set Person {
    p.friends
}

/**
 * Function to count friends
 */
fun countFriends[p: Person]: one Int {
    #(p.friends)
}

/**
 * Test predicate using other predicates
 */
pred testNetwork {
    all p: Person | {
        wellFormed[p]
        some s: Student | popular[s]
    }
}

// Example run command
run {
    some s: Student | popular[s]
    all t: Teacher | #(t.teaches) > 0
} for 5

// Test expect block
test expect networkTests {
    vacuity: {
        some Student
        some Teacher
    } for 3 is sat
    
    noSelfLoops: {
        all p: Person | p not in p.friends
    } for 5 is theorem
}
