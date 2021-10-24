/**
 * ReverseString
 */
class ReverseString {
  public static void main(String[] args) {
    char[] testWord = { 'h', 'e', 'l', 'l', 'o' };
    reverseString(testWord);
  }

  public static void reverseString(char[] s) {
    int start = 0;
    int end = s.length - 1;
    char temp;

    while (start < end) {
      temp = s[start];
      s[start++] = s[end];
      s[end--] = temp;
    }
  }
}
