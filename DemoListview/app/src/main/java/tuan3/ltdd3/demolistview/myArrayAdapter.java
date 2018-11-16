package tuan3.ltdd3.demolistview;

import android.app.Activity;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ArrayAdapter;
import android.widget.TextView;

import java.util.ArrayList;

public class myArrayAdapter extends ArrayAdapter<NhanVien> {
    Activity content = null;
    int layoutID;
    ArrayList<NhanVien> listNV = null;


    public myArrayAdapter(Activity context, int resource, ArrayList<NhanVien> objects) {
        super(context, resource, objects);
        this.content = context;
        this.layoutID = resource;
        this.listNV = objects;
    }


    public View getView(int position, View convertView, ViewGroup parent) {
        LayoutInflater inflater = content.getLayoutInflater();
        convertView = inflater.inflate(layoutID,null);
        if (listNV.size() > 0 && position >= 0) {
            TextView manv = (TextView) convertView.findViewById(R.id.tvma);
            TextView tennv = (TextView) convertView.findViewById(R.id.tvten);
            TextView email = (TextView) convertView.findViewById(R.id.tvemail);
            TextView phone = (TextView) convertView.findViewById(R.id.tvphone);
            NhanVien nv=listNV.get(position);
            manv.setText(nv.getMaNV());
            tennv.setText(nv.getTenNV());
            email.setText(nv.getEmail());
            phone.setText(String.valueOf(nv.getPhone()));
        }

        return convertView;
    }
}
