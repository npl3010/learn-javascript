this.fName = 'Linh';
this.lName = 'Nguyen';

const person = {
    fName: 'Uyen',
    lName: 'Do',
    getFullName() {
        return `${this.fName} ${this.lName}`;
    }
}

// 1. Case 1:
console.log(person.getFullName()); // Output: Uyen Do


// 2. Case 2:
const varCase1 = person.getFullName(); // varCase1 is not a function!
const varCase2 = person.getFullName; // varCase2 is a function!
console.log(varCase1); // Output: Uyen Do
console.log(varCase2()); // Output: Linh Nguyen


// 3. Case 3: Sử dụng hàm bind() để ràng buộc giá trị cho từ khóa 'this' của một function:
const varCase3 = person.getFullName.bind(person);
console.log(varCase3()); // Output: Uyen Do


/**
 * Với 2 trường hợp trên:
 * 
 * Đối với case 1:
 * - getFullName() là method của person. Thế nên từ khóa 'this' chỉ đến đối tượng person.
 * 
 * Đối với case 2:
 * - varCase1 chỉ đơn giản là lưu lại giá trị trả về của case 1.
 * - varCase2 cũng chính là function getFullName() bên trong đối tượng person (do cùng tham chiếu vào 1 vùng nhớ).
 * Thế nnưng, việc gọi hàm varCase2() có nghĩa là gọi hàm getFullName() ở phạm vi bên ngoài đối tượng person.
 * Vì varCase2 là một function không thuộc đối tượng person, nên 'this' của nó không thể nào chỉ đến person được.
 * 
 * VẤN ĐỀ: Làm sao để hàm varCase2 chỉ đến đối tượng person?
 * CÁCH GIẢI QUYẾT:
 * - Dùng bind() để ràng buộc giá trị cho từ khóa 'this' của một function.
 * - Nói cách khác, dùng bind() để cho biết từ khóa 'this' trong một function sẽ chỉ đến đối tượng nào.
 * Hãy xem ví dụ ở case 3.
 */
