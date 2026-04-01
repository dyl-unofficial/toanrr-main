// File: Multiset.js

class Multiset {
  constructor(iterable = []) {
    this.elements = new Map();
    this.totalElements = 0;

    // Cho phép khởi tạo bằng một mảng có sẵn
    for (const item of iterable) {
      this.add(item);
    }
  }

  // Thêm phần tử
  add(item, quantity = 1) {
    if (quantity <= 0) return;
    const count = this.elements.get(item) || 0;
    this.elements.set(item, count + quantity);
    this.totalElements += quantity;
  }

  // Xóa phần tử (mặc định xóa 1, có thể truyền số lượng muốn xóa)
  remove(item, quantity = 1) {
    if (!this.elements.has(item) || quantity <= 0) return false;

    const count = this.elements.get(item);
    const removeCount = Math.min(count, quantity); // Không thể xóa nhiều hơn số lượng đang có

    if (count === removeCount) {
      this.elements.delete(item);
    } else {
      this.elements.set(item, count - removeCount);
    }
    this.totalElements -= removeCount;
    return true;
  }

  // Kiểm tra phần tử có tồn tại không
  has(item) {
    return this.elements.has(item);
  }

  // Đếm số lượng của 1 phần tử
  count(item) {
    return this.elements.get(item) || 0;
  }

  // Xóa sạch Multiset
  clear() {
    this.elements.clear();
    this.totalElements = 0;
  }

  // Thuộc tính lấy tổng số phần tử (tính cả trùng lặp)
  get size() {
    return this.totalElements;
  }

  // Thuộc tính lấy danh sách các phần tử duy nhất
  get uniqueElements() {
    return Array.from(this.elements.keys());
  }

  // Hỗ trợ vòng lặp (giống Array.forEach)
  forEach(callback) {
    this.elements.forEach((count, item) => {
      callback(item, count, this);
    });
  }
}

module.exports = Multiset;
