/*
11.07.2020
HYUN JAE CHO
DATA STRUCTURE - STACK
*/
#include "Node.h"

//stack
//push
//pop
//peek

template <typename T>
class Stack
{
public:
    Stack()
    {
        head = top = nullptr;
    }
    void Push(T param)
    {
        if (head == nullptr)
        {
            head = top = new Node<T>(param);
        }
        else
        {
            Node<T> *newNode = new Node<T>(param);
            top->next = newNode;
            top = newNode;
        }
    }

    T Pop()
    {
        if (head == nullptr)
        {
            T err;
            return err;
        }
        else
        {
            T value = top->getValue();
            Node<T> *cur = head;
            Node<T> *prev = nullptr;
            while (cur != top)
            {
                prev = cur;
                cur = cur->next;
            }
            if (prev)
            {
                prev->next = nullptr;
                delete top;
                top = prev;
            }
            else if (head == top)
            {
                delete top;
                delete head;
                top = head = nullptr;
            }
            
            return value;
        }
    }

    T Peek()
    {
        return top->getValue();
    }

private:
    Node<T> *head;
    Node<T> *top;
};
