/*
Node
09.07.2020
written by Hyun Jae Cho
*/

template <typename T>
class Node
{
public:
    Node(T param)
    {
        value = param;
        next = nullptr;
    }
    T     getValue() { return value;}

    Node *next;
private:
    T value;
};
