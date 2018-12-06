//
//  ViewController.swift
//  ThuVienSach
//
//  Created by nguyenvanam on 12/5/18.
//  Copyright © 2018 nguyenvanam. All rights reserved.
//

import UIKit

class ViewController: UIViewController {

    @IBOutlet weak var username: UITextField!
    @IBOutlet weak var password: UITextField!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        print("View 1: Did Load")
    }
    override func viewWillAppear(_ animated: Bool) {
        print("View 1: WillAppear")
    }
    override func viewDidAppear(_ animated: Bool) {
         print("View 1: DidAppear")
    }
    override func viewWillDisappear(_ animated: Bool) {
        print("View 1: WillDisAppear")
    }
    override func viewDidDisappear(_ animated: Bool) {
        print("View 1: DidDisAppear")
    }
    @IBAction func Login(_ sender: Any) {
        //Storyboard
        let Storyboard = UIStoryboard(name: "Main", bundle: nil)
        // Tao man hinh danh sach
        let ScreenDanhSach = Storyboard.instantiateViewController(withIdentifier: "DanhSach") as! DanhSachViewController
        //Navigation PUSH
        self.navigationController?.pushViewController(ScreenDanhSach, animated: true)
    }
  
    @IBAction func register(_ sender: Any) {
    }
    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }


}

