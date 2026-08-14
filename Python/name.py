name="additya pramanik"
print(name.title()) 
#title() displays each word in titlecase, where each word begins with a capital letter.
"""
A method is an action that Python can perform on a piece of data. The
dot (.) after name in name.title() tells Python to make the title() method
act on the variable name. Every method is followed by a set of parentheses,
because methods often need additional information to do their work.
That information is provided inside the parentheses. The title() function
doesn’t need any additional information, so its parentheses are empty.
"""
name= "nithin"
print(name.upper())
name="JOTI"
print(name.lower())
"""
#output---

NITHIN
joti
"""

first_name="Hero"
last_name="alam".title()
full_name= first_name+" "+last_name 
#This method of combining strings is called concatenation.
print(full_name)

message="    Kaise hai aap   ".rstrip()+" "+full_name;
print(message)
#To ensure that no whitespace exists at the right end of a string, use the rstrip() method.
"""
Output---
    Kaise hai aap Hero Alam
"""
print(message.lstrip())
#strip whitespace from the left side of a string using the lstrip() method
"""
output---
Kaise hai aap Hero Alam
"""
message= "     Boka Chele    ".strip()+ " "+full_name
print(message)
#strip whitespace from both sides at once using strip()#000000#FFFFFF#FFFFFF#FFFFFF#FFFFFF#FFFFFF
