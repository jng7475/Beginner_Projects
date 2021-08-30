storage = {}
with open("account_storage.txt") as f:  # upload data from file
    for line in f:
        (key, val) = line.split()
        storage[str(key)] = val

login = False


def create():
    new_username = str(input("Enter new username: "))
    while new_username in storage:
        new_username = input("Username existed, enter another one: ")
    new_password = str(input("enter your password: "))
    storage[new_username] = new_password


while not login:
    username = input("Username: ")
    if username not in storage:
        choice = input(
            "Account not found, do you want to:\n" + "1. Re-enter username and password\n" + "2. Create a new account\n")
        if choice == "2":
            create()
        elif choice == "1":
            login = False
    else:
        password = input("Password: ")
        if password == storage[username]:
            print("you are signed in")
            login = True
        else:
            print("wrong password")

# store the data:
file = open("account_storage.txt", "a")
file.write(str(username) + " ")
file.write(str(password) + "\n")

# end
