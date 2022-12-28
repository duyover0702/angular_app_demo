## Angular Material và CDK

### Mục lục
[I. Giới thiệu về Angular Material và CDK](#material&cdk)

[II. Angular Material](#material)
- [1. Angular Material là gì](#dinhnghia1)
- [2. Cài đặt Angular Material](#caidat)
- [3. Hiển Thị Component card](#hienthi1)

[III. CDK](#cdk)
- [1. CDK là gì ](#dinhnghia2)
- [2. Ví dụ và hiển thị](#hienthi2)
	
[III.Tổng kết](#tongket)

[Link Tham Khảo](#thamkhao)

<a name="material&cdk"></a>
## I.Giới thiệu về Angular Material và CDK
- `Angular Material ` và `CDK` là thư viện hỗ trợ lập trình viên thiết kế giao diện website thuộc về  `Material Design`
- Năm 2014, Google phát minh ra một ngôn ngữ thiết kế được gọi là `Material Design`. `Material Design` là một công cụ hỗ trợ phần thiết kế cơ sở về thị giác và tương tác.
Google loại bỏ JavaScript và viết lại code từ đầu, đặt lại tên là Angular vào năm 2016. Cuối cùng, Google dán `Material Design` vào Angular sử dụng Typescript và gọi nó là `Angular Material`.

<a name="material"></a>
## II.Angular Material
<a name="dinhnghia1"></a>
### 1.Angular Material là gì?
Thành phần UI/UX của Angular được gọi là `Angular Material`. Việc ứng dụng các framework dựa trên thành phần như React, Angular, và Vue.js đã làm tăng số lượng các thành phần giao diện người dùng (UI). Những tập hợp này đã cung cấp một framework thiết kế đáp ứng và hiệu quả cho các lập trình viên web để lập trình các ứng dụng nhanh hơn.
Nó bao gồm một loạt các thành phần UI của Angular như sau:
- Kiểm soát Form: Input, lựa chọn, các thanh kéo, checkbox, v..v...
- Các thành phần Layout: lưới, cards, lists, và tabs
Buttons:
- Các Mẫu Điều hướng - Side-Navy, Menus, và Toolbars
Bảng dữ liệu với phần tiêu đề:
- Models và Pop-Ups
- Indicator - spinner và progress bar
Dưới đây là một số tính năng thiết yếu của Angular Materials:
- CSS có thể tùy biến với một footprint nhỏ
- Thiết kế có sẵn dễ tiếp thu.
- Biên dịch với phiên bản mới hơn của các điều khiển UI như checkbox, trường văn bản, và các nút để đáp ứng các nhu cầu thiết kế nội dung.
- Sử dụng để tạo các thành phần web liên trình duyệt và có thể tái sử dụng.
- Bao gồm các tính năng đặc trưng và được tăng cường như toolbars, cards, side navy, speed dial,..v..v..
- Nó có thiết kế đáp ứng
- Các content class của Angular được thiết kế để trang có thể thích ứng với bất kỳ kích cỡ màn hình nào.
- Website được phát triển bằng Angular tương thích với Android, máy tính bảng, và PC.
- Kiểu mẫu đáp ứng.
- Thiết kế phẳng.
- Trong Angular Material, Bóng và màu sắc không thay đổi trên nhiều thiết bị và nền tảng.
- Angular Material hỗ trợ nhiều màu sắc và đổ bóng.

<a name="caidat"></a>
### 2.Cài đặt angular material

Chúng ta sử dụng lệnh `ng add` để cài đặt các package cần thiết. Ngoài việc cài Angular Material, chúng ta cũng cần phải có CDK và Animations nữa.
Vậy hãy mở cửa sổ Terminal trong VS Code và thực thi lệnh sau:
```ng add @angular/material```
lệnh `ng add` sẽ thực thi các hành động sau:

- Thêm project dependencies to package.json
- Thêm Roboto font vào index.html
- Thêm Material Design icon font vào index.html

 Thêm một vài dòng Global CSS styles vào như:
 - Xóa lề từ thẻ body
 - cài height: 100% trên các thẻ html and body
 - Cài Roboto làm font mặc định của app
 
Hoàn tất quá trình cài đặt

<a name="hienthi1"></a>
### 3.Hiển thị Component

Chèn thử một component card vào ứng dụng

Bạn cần nhập  `MatCardModule` bạn muốn hiển thị bằng cách thêm các dòng sau vào app.module.ts trong tệp của mình.

```
import{MatCardModule} from '@angular/material/card';
@NgModule ({
  imports: [
  MatCardModule;
  ]
})
class AppModule {} 
```
Thêm MatCardModule vào app.component.html như sau:
```
<mat-card>Hello</mat-card>
```
<a name="cdk"></a>
## III.CDK
<a name="dinhnghia2"></a>
### 1.CDK là gì?
`CDK` là viết tắt của The Component Dev Kit là một bộ công cụ hỗ trợ thiết kế giao diện người dùng
<a name="hienthi2"></a>
### 2.Ví dụ và hiển thị
Thêm Clipboard component vào app

**Directives**
  
 `CdkCopyToClipboard`
Cung cấp hành vi cho một nút khi mà người dùng nhấn vào thì nó sẽ coppy nội dung đó vào bộ nhớ tạm
  
Selector: [cdkCopyToClipboard]
Khai báo `ClipboardModule` vào  app.module.ts .

```
  import {ClipboardModule} from '@angular/cdk/clipboard';
```
Code html demo

```
<label for="clipboard-example-textarea">Text to be copied</label>
<textarea id="clipboard-example-textarea" cols="30" rows="10" [(ngModel)]="value"></textarea>
<button [cdkCopyToClipboard]="value">Copy to clipboard</button>

```
Code Ts demo
```
import {Component} from '@angular/core';

/**
 * @title Clipboard overview
 */
@Component({
  selector: 'cdk-clipboard-overview-example',
  templateUrl: 'cdk-clipboard-overview-example.html',
  styleUrls: ['cdk-clipboard-overview-example.css'],
})
export class CdkClipboardOverviewExample {
  value =
    `happy new years;
}

```
<a name="tongket"></a>
## III.Tổng Kết
Về cơ bản thì Angular Material được sử dụng như vậy. Angular Material còn rất nhiều thành phần khác và . Các thành phần đó là: select, checkbox, radio button, 
grid, list,... Ngoài ra còn có các thư viện khác cũng có chức năng tượng tự như Material chẳng hạn như PrimeNg

<a name="thamkhao"></a>

Link Tham Khảo:
 - https://www.youtube.com/watch?v=n-OQkC4do5M
 - https://www.youtube.com/watch?v=YM6CeFZAO6o

















