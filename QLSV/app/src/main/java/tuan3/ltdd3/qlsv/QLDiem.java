package tuan3.ltdd3.qlsv;


import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ListView;
import android.widget.Toast;

public class QLDiem extends AppCompatActivity {
    EditText txtDiemGK, txtDiemCK,txtDTB;
    Button btnThem, btnSua, btnXoa;
    ListView lvDiem = null;

    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.quanlydiem);

        /*txtDiemGK = (EditText) findViewById(R.id.txtDiemGK);
        txtDiemCK = (EditText) findViewById(R.id.txtDiemCK);
        txtDTB = (EditText) findViewById(R.id.txtDTB);


        lvDiem = (ListView) findViewById(R.id.lvDiem);

        btnThem=(Button)findViewById(R.id.btnThem);
        btnSua=(Button)findViewById(R.id.btnSua);
        btnXoa=(Button)findViewById(R.id.btnXoa);

        btnThem.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Toast.makeText(getApplicationContext(), "Thêm điểm", Toast.LENGTH_SHORT).show();

            }
        });
        btnSua.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Toast.makeText(getApplicationContext(), "Sửa điểm", Toast.LENGTH_SHORT).show();

            }
        });

        btnXoa.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Toast.makeText(getApplicationContext(), "Xóa điểm", Toast.LENGTH_SHORT).show();

            }
        });*/
    }
}
