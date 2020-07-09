#include "Node.h"

//enqueue,dequeue,peek,isEmpty
template <typename T>
class Queue
{
public:
    Queue()
    {
        front = rear = nullptr;
    }
    Queue(T value)
    {
        front = new Node<T>(value);
        rear = front;
    }

    ~Queue()
    {
        while (front != nullptr)
        {
            Node<T> *node = front;
            front = front->next;
            delete node;
        }
    }
    void Enqueue(T value)
    {
        if (front == nullptr)
        {
            front = new Node<T>(value);
            rear = front;
        }
        else
        {
            Node<T> *prev = front;
            Node<T> *last = front->next;
            while (last != nullptr)
            {
                prev = last;
                last = last->next;
            }
            rear = prev->next = new Node<T>(value);
        }
    }

    T Dequeue()
    {
        if (IsEmpty())
        {
            //what should i return when it is empty?
            T err;
            return err;
        }
        T ret = front->getValue();
        Node<T> *node = front;
        front = front->next;
        delete node;
        return ret;
    }

    T Peek()
    {
        if (IsEmpty())
        {
            T err;
            return err;
        }
        else
        {
            return front->getValue();
        }
    }

    bool IsEmpty()
    {
        return front == nullptr;
    }

private:
    Node<T> *front;
    Node<T> *rear;
};
