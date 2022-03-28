function counter() {
    let number = 0;

    // Hàm increase() ở đây được gọi là closure.
    function increase() {
        return ++number;
    }

    return increase;
}

// 1. Case 1:
console.log('Case 1:');
console.log(counter()()); // Output: 1
console.log(counter()()); // Output: 1
console.log(counter()()); // Output: 1
console.log('\n\n');


// 2. Case 2:
console.log('Case 2:');
const c1 = counter();
console.log(c1()); // Output: 1
console.log(c1()); // Output: 2
console.log(c1()); // Output: 3


/**
 * Với 2 trường hợp trên, vì sao đều là sử dụng hàm increase() nhưng lại cho ra kết quả khác nhau?
 * 
 * Đối với case 1:
 * - Mỗi lần gọi hàm counter() cũng tức là mỗi lần khởi tạo một scope riêng biệt cho hàm đó.
 * - Thế nên kết quả trả về mỗi lần gọi counter()() là như nhau.
 * 
 * Đối với case 2:
 * - Khi gọi hàm c1() thì tức là ta đang gọi chính hàm increase() thuộc một phạm vi của counter() vừa gọi.
 * - Vì hàm increase() thuộc counter(), nên dù ta đưa increase() ra ngoài để sử dụng bằng cách gán nó cho c1,
 * thì c1() cũng chính là increase() thuộc phạm vi của counter() đó.
 * - Thế nên những lần gọi c1() đều có chung một phạm vi duy nhất thuộc counter() này.
 * - Vậy, ta gọi increase() là một closure.
 * - Thế thì tại sao sau khi gọi counter() để gán cho c1,
 * cũng tức là sau khi counter() đã thực thi xong,
 * mà phạm vi của nó và biến number không bị hủy (bị xóa khỏi bộ nhớ)?
 * Đó là nhờ có closure tham chiếu tới biến number thuộc phạm vi counter().
 */