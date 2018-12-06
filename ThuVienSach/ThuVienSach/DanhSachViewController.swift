//
//  DanhSachViewController.swift
//  ThuVienSach
//
//  Created by nguyenvanam on 12/5/18.
//  Copyright © 2018 nguyenvanam. All rights reserved.
//

import UIKit

class DanhSachViewController: UIViewController, UITableViewDataSource {
    
    @IBOutlet weak var myTable: UITableView!
        var mang: [String]!
    override func viewDidLoad() {
        super.viewDidLoad()
    print("View DidLoad")
        myTable.dataSource = self
        mang = ["android", "ios", "react native","php"]
}
    //Khoi tao thu vien cho tableview
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
    return mang.count
    }
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
    let txttensach = tableView.dequeueReusableCell(withIdentifier: "txttensach")
        txttensach?.textLabel?.text = mang[indexPath.row]
        return txttensach!
    }
// Appear xuat hien
override func viewWillAppear(_ animated: Bool) {
    print("View 2: WillAppear")
}
override func viewDidAppear(_ animated: Bool) {
    print("View 2: DidAppear")
}
// Appear bien mat
override func viewWillDisappear(_ animated: Bool) {
    print("View 2: WillDisAppear")
}
override func viewDidDisappear(_ animated: Bool) {
    print("View 2: DidDisAppear")
}

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    

    /*
    // MARK: - Navigation

    // In a storyboard-based application, you will often want to do a little preparation before navigation
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        // Get the new view controller using segue.destinationViewController.
        // Pass the selected object to the new view controller.
    }
    */

}
