using System;

// Simple welcome message, taking in the user's name, 
// and printing it back out in the console along with a greeting.
public class Welcome
{  
    public static void Main(string[] args)  
    {  
        var name = Console.ReadLine("Please enter your name...");
        Console.WriteLine($"Welcome to the welcome function in C#, {name}");
    }  
}  