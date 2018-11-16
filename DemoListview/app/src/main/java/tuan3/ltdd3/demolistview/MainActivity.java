package tuan3.ltdd3.demolistview;

import android.app.Activity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.CheckBox;
import android.widget.EditText;
import android.widget.ListView;

import java.util.ArrayList;

public class MainActivity extends Activity {

    ArrayList<NhanVien> arrNV = new ArrayList<NhanVien>();
    myArrayAdapter adapter = null;
    ListView lvNhanVien = null;
    Button btnThem, btnXoa;
    EditText txtMa, txtTen, txtEmail, txtPhone;



    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
         getView();
         getEvent();
    }

    public void getView() {
        lvNhanVien = (ListView) findViewById(R.id.lvNhanvien);
        arrNV = new ArrayList<NhanVien>();
        adapter = new myArrayAdapter(this, R.layout.item_listview, arrNV);
        lvNhanVien.setAdapter(adapter);

        txtMa = (EditText) findViewById(R.id.txtMaNV);
        txtTen = (EditText) findViewById(R.id.txtTenNV);
        txtEmail = (EditText) findViewById(R.id.txtEmail);
        txtPhone = (EditText) findViewById(R.id.txtPhone);

        btnThem = (Button) findViewById(R.id.btnThem);
        btnXoa = (Button) findViewById(R.id.btnXoa);
    }

    public void getEvent() {
        btnThem.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                ThemNV();
            }
        });

        btnXoa.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
               XoaNV();
            }
        });


    }

    public void ThemNV() {
        String ma = txtMa.getText().toString() + " ";
        String ten = txtTen.getText().toString() + " ";
        String email = txtEmail.getText().toString() + " ";
        int phone = Integer.parseInt(txtPhone.getText().toString());

        // Tạo một nhan vien
        NhanVien nv = new NhanVien();
        nv.setMaNV(ma);
        nv.setTenNV(ten);
        nv.setEmail(email);
        nv.setPhone(phone);

        // Đưa vào danh sách
        arrNV.add(nv);

        // gọi hàm cập nhật giao diện
        adapter.notifyDataSetChanged();

        // Sau khi update thì xóa trắng dữ liệu và cho editma focus
        txtMa.setText("");
        txtTen.setText("");
        txtEmail.setText("");
        txtPhone.setText("");

        txtMa.requestFocus();
    }

    public void XoaNV() {
        for (int i = lvNhanVien.getChildCount() - 1; i >= 0; i--) {
            View v = lvNhanVien.getChildAt(i);
            CheckBox ckdel=(CheckBox) v.findViewById(R.id.ckdel);
            if(ckdel.isChecked()==true){
                arrNV.remove(i);
            }
        }
        adapter.notifyDataSetChanged();
    }


}
