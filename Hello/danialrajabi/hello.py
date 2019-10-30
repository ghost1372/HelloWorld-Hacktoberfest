#! /usr/bin/env python3

class HelloWorld:
    def __init__(self, name):
        self.name = name

    def sayhello(self):
        return ('#######################################################\n'
               f'##############   HelloWorld from {self.name}   #############\n'
                '###########       Hacktoberfest 2019        ###########\n'   
                '#######################################################'
                )


    def __repr__(self):
        return 'Hello World'



if __name__ == '__main__':
    danial = HelloWorld(name='danial')
    print(danial.sayhello())
