package tuan3.ltdd3.demolistview;

public class NhanVien {
    private String MaNV;
    private String TenNV;
    private String Email;
    private int Phone;

    public NhanVien() {
    }

    public NhanVien(String ma, String ten, String email, int phone) {
        this.setMaNV(ma);
        this.setTenNV(ten);
        this.setEmail(email);
        this.setPhone(phone);
    }


    public String getMaNV() {
        return MaNV;
    }

    public void setMaNV(String maNV) {
        MaNV = maNV;
    }

    public String getTenNV() {
        return TenNV;
    }

    public void setTenNV(String tenNV) {
        TenNV = tenNV;
    }

    public String getEmail() {
        return Email;
    }

    public void setEmail(String email) {
        Email = email;
    }

    public int getPhone() {
        return Phone;
    }

    public void setPhone(int phone) {
        Phone = phone;
    }
}
