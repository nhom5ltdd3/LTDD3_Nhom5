package tuan3.ltdd3.qlsv;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ListView;
import android.widget.Toast;

public class MonHoc extends AppCompatActivity {
    EditText txtMaMH,txtTenMH,txtTengiaovien;
    Button btnThem,btnSua,btnXoa;
    ListView lvMonhoc=null;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.monhoc);

        txtMaMH=(EditText)findViewById(R.id.txtMaMH);
        txtTenMH=(EditText)findViewById(R.id.txtTenMH);
        txtTengiaovien=(EditText)findViewById(R.id.txtTenGiaoVien);

        lvMonhoc=(ListView)findViewById(R.id.lvMonhoc);

        btnThem=(Button)findViewById(R.id.btnThem);
        btnSua=(Button)findViewById(R.id.btnSua);
        btnXoa=(Button)findViewById(R.id.btnXoa);

        btnThem.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Toast.makeText(getApplicationContext(), "Thêm môn học", Toast.LENGTH_SHORT).show();

            }
        });
        btnSua.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Toast.makeText(getApplicationContext(), "Sửa môn học", Toast.LENGTH_SHORT).show();

            }
        });

        btnXoa.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Toast.makeText(getApplicationContext(), "Xóa môn học", Toast.LENGTH_SHORT).show();

            }
        });
    }


    public boolean onCreateOptionsMenu(Menu menu) {
        // Inflate the menu; this adds items to the action bar if it is present.
        getMenuInflater().inflate(R.menu.menu_main, menu);
        return true;
    }


    public boolean onOptionsItemSelected(MenuItem item) {
        // Handle action bar item clicks here. The action bar will
        // automatically handle clicks on the Home/Up button, so long
        // as you specify a parent activity in AndroidManifest.xml.
        int id = item.getItemId();

        //noinspection SimplifiableIfStatement
        if (id == R.id.action_settings) {
            Intent it= new Intent(this,QLDiem.class);
            startActivity(it);
        }

        return super.onOptionsItemSelected(item);
    }
}
