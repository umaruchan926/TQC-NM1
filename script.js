const additionalQuestions = [ ]; 
const questionDatabase = [
    {
        "id": "1-01",
        "type": "multiple",
        "question": "網路基礎建設包含三類網路元件，下列敘述哪些正確？（複選）",
        "options": [
            {
                "label": "裝置",
                "value": "A"
            },
            {
                "label": "檔案",
                "value": "B"
            },
            {
                "label": "媒體",
                "value": "C"
            },
            {
                "label": "服務",
                "value": "D"
            }
        ],
        "answer": ["A", "C", "D"]
    },
    {
        "id": "1-02",
        "type": "multiple",
        "question": "關於網路基礎架構的類型,下列敘述哪些正確？（複選）",
        "options": [
            {
                "label": "人際網路",
                "value": "A"
            },
            {
                "label": "區域網路",
                "value": "B"
            },
            {
                "label": "無線網路",
                "value": "C"
            },
            {
                "label": "廣域網路",
                "value": "D"
            }
        ],
        "answer": ["B", "C", "D"]
    },
    {
        "id": "1-03",
        "type": "single",
        "question": "下列敘述哪一項是指統合網路？",
        "options": [
            {
                "label": "一項服務 - 一個網路",
                "value": "A"
            },
            {
                "label": "一項服務 - 多個網路",
                "value": "B"
            },
            {
                "label": "多項服務 - 一個網路",
                "value": "C"
            },
            {
                "label": "多項服務 - 多個網路",
                "value": "D"
            }
        ],
        "answer": ["C"]
    },
    {
        "id": "1-04",
        "type": "single",
        "question": "將資料從一個給定點傳送到另一給定點所用的時間，下列敘述哪一項正確？",
        "options": [
            {
                "label": "Dead Time",
                "value": "A"
            },
            {
                "label": "Hello Time",
                "value": "B"
            },
            {
                "label": "延遲時間",
                "value": "C"
            },
            {
                "label": "收斂時間",
                "value": "D"
            }
        ],
        "answer": ["C"]
    },
    {
        "id": "1-05",
        "type": "multiple",
        "question": "頻寬是媒體承載資料的能力，下列哪些是屬於頻寬的單位？（複選）",
        "options": [
            {
                "label": "Kbps",
                "value": "A"
            },
            {
                "label": "Mbps",
                "value": "B"
            },
            {
                "label": "Lbps",
                "value": "C"
            },
            {
                "label": "Gbps",
                "value": "D"
            }
        ],
        "answer": ["A", "B", "D"]
    },
    {
        "id": "1-06",
        "type": "multiple",
        "question": "下列哪些裝置是屬於終端裝置？（複選）",
        "options": [
            {
                "label": "網路線",
                "value": "A"
            },
            {
                "label": "筆記型電腦",
                "value": "B"
            },
            {
                "label": "網路印表機",
                "value": "C"
            },
            {
                "label": "行動手持裝置",
                "value": "D"
            }
        ],
        "answer": ["B", "C", "D"]
    },
    {
        "id": "1-07",
        "type": "single",
        "question": "下列敘述哪一項裝置，是用來將不同型式的網路連接起來的連接器，連接有許多區段的複雜網路？",
        "options": [
            {
                "label": "主機",
                "value": "A"
            },
            {
                "label": "Web 伺服器",
                "value": "B"
            },
            {
                "label": "DSL 數據機",
                "value": "C"
            },
            {
                "label": "路由器",
                "value": "D"
            }
        ],
        "answer": ["D"]
    },
    {
        "id": "1-08",
        "type": "single",
        "question": "下列哪一項裝置，是指所有連線到網路並直接參與網路通訊的電腦？",
        "options": [
            {
                "label": "VoIP 電話",
                "value": "A"
            },
            {
                "label": "行動手持裝置",
                "value": "B"
            },
            {
                "label": "網路印表機",
                "value": "C"
            },
            {
                "label": "主機",
                "value": "D"
            }
        ],
        "answer": ["D"]
    },
    {
        "id": "1-09",
        "type": "single",
        "question": "下列哪一項不是階層式網路設計的網路層級？",
        "options": [
            {
                "label": "存取層",
                "value": "A"
            },
            {
                "label": "分佈層",
                "value": "B"
            },
            {
                "label": "網路層",
                "value": "C"
            },
            {
                "label": "核心層",
                "value": "D"
            }
        ],
        "answer": ["A"]
    },
    {
        "id": "1-11",
        "type": "single",
        "question": "最簡單的對等式網路，是由兩台使用有線或無線連線方式直接相連的電腦組成，下列敘述哪一項是對等式網路的優點？",
        "options": [
            {
                "label": "成本較高",
                "value": "A"
            },
            {
                "label": "不可延伸",
                "value": "B"
            },
            {
                "label": "無法集中管理",
                "value": "C"
            },
            {
                "label": "易於安裝",
                "value": "D"
            }
        ],
        "answer": ["D"]
    },
    {
        "id": "1-12",
        "type": "single",
        "question": "最簡單的對等式網路，是由兩台使用有線或無線連線方式直接相連的電腦組成，下列敘述哪一項是對等式網路的缺點？",
        "options": [
            {
                "label": "易於安裝",
                "value": "A"
            },
            {
                "label": "複雜性較低",
                "value": "B"
            },
            {
                "label": "無法集中管理",
                "value": "C"
            },
            {
                "label": "成本較低",
                "value": "D"
            }
        ],
        "answer": ["C"]
    },
    {
        "id": "1-13",
        "type": "single",
        "question": "若要在 Windows 電腦中檢視 MAC 位址的指令及參數，下列哪一項正確？",
        "options": [
            {
                "label": "ipconfig/renew",
                "value": "A"
            },
            {
                "label": "ipconfig/release",
                "value": "B"
            },
            {
                "label": "ipconfig/all",
                "value": "C"
            },
            {
                "label": "ipconfig",
                "value": "D"
            }
        ],
        "answer": ["C"]
    },
    {
        "id": "1-14",
        "type": "single",
        "question": "會傳送「網際網路控制訊息通訊協定」（ICMP）回應封包給目的地，已確定到目的地所經的路徑，下列指令哪一項正確？",
        "options": [
            {
                "label": "Ping",
                "value": "A"
            },
            {
                "label": "Tracert",
                "value": "B"
            },
            {
                "label": "telnet",
                "value": "C"
            },
            {
                "label": "ssh",
                "value": "D"
            }
        ],
        "answer": ["B"]
    },
    {
        "id": "1-15",
        "type": "single",
        "question": "使用 ping 命令是測試連通性的有效方法，下列哪一項是 ping 指令所使用的協定？",
        "options": [
            {
                "label": "TCP",
                "value": "A"
            },
            {
                "label": "UDP",
                "value": "B"
            },
            {
                "label": "ARP",
                "value": "C"
            },
            {
                "label": "ICMP",
                "value": "D"
            }
        ],
        "answer": ["D"]
    },
    {
        "id": "1-16",
        "type": "single",
        "question": "若要進行網路監控和排除網路故障，下列哪一項是最有效的工具？",
        "options": [
            {
                "label": "建立網路基線",
                "value": "A"
            },
            {
                "label": "網路設計",
                "value": "B"
            },
            {
                "label": "IP 定址方案",
                "value": "C"
            },
            {
                "label": "標識網路",
                "value": "D"
            }
        ],
        "answer": ["A"]
    },
    {
        "id": "1-17",
        "type": "single",
        "question": "關於邏輯拓樸圖的內容，下列哪一項錯誤？",
        "options": [
            {
                "label": "標識裝置",
                "value": "A"
            },
            {
                "label": "標識連接埠和 IP 定址方案",
                "value": "B"
            },
            {
                "label": "標識中介裝置",
                "value": "C"
            },
            {
                "label": "IP 定址方案",
                "value": "D"
            }
        ],
        "answer": ["C"]
    },
    {
        "id": "1-18",
        "type": "single",
        "question": "關於實體拓樸圖的內容，下列哪一項錯誤？",
        "options": [
            {
                "label": "標識中介裝置",
                "value": "A"
            },
            {
                "label": "連接埠設定",
                "value": "B"
            },
            {
                "label": "IP 定址方案",
                "value": "C"
            },
            {
                "label": "纜線安裝的實體位置",
                "value": "D"
            }
        ],
        "answer": ["C"]
    },
    {
        "id": "1-19",
        "type": "multiple",
        "question": "關於實體拓樸和邏輯拓樸的敘述，下列哪些正確？（複選）",
        "options": [
            {
                "label": "實體拓樸顯示每個網路的 IP 定址方案",
                "value": "A"
            },
            {
                "label": "實體拓樸是電纜、電腦和其他週邊裝置的實體位置",
                "value": "B"
            },
            {
                "label": "邏輯拓樸始終與實體拓樸相同",
                "value": "C"
            },
            {
                "label": "邏輯拓樸紀錄資料透過網路的路徑以及網路功能（如路由）發生的位置",
                "value": "D"
            }
        ],
        "answer": ["B", "D"]
    },
    {
        "id": "1-20",
        "type": "multiple",
        "question": "關於區域網路常用的實體拓樸，下列哪些正確？（複選）",
        "options": [
            {
                "label": "網狀",
                "value": "A"
            },
            {
                "label": "星形",
                "value": "B"
            },
            {
                "label": "環狀",
                "value": "C"
            },
            {
                "label": "匯流排",
                "value": "D"
            }
        ],
        "answer": ["B", "C", "D"]
    },
    {
        "id": "1-21",
        "type": "single",
        "question": "下列哪一項是銅纜所傳輸的訊號？",
        "options": [
            {
                "label": "光",
                "value": "A"
            },
            {
                "label": "火",
                "value": "B"
            },
            {
                "label": "水",
                "value": "C"
            },
            {
                "label": "電",
                "value": "D"
            }
        ],
        "answer": ["D"]
    },
    {
        "id": "1-22",
        "type": "single",
        "question": "下列哪一項是光纖所傳輸的訊號？",
        "options": [
            {
                "label": "光",
                "value": "A"
            },
            {
                "label": "火",
                "value": "B"
            },
            {
                "label": "水",
                "value": "C"
            },
            {
                "label": "電",
                "value": "D"
            }
        ],
        "answer": ["A"]
    },
    {
        "id": "1-23",
        "type": "single",
        "question": "光纖相比於銅纜的優勢，下列敘述哪一項正確？",
        "options": [
            {
                "label": "熔接和安裝比銅纜更容易",
                "value": "A"
            },
            {
                "label": "光纖可以在彎管附近安裝",
                "value": "B"
            },
            {
                "label": "光纖通常比銅纜成本低",
                "value": "C"
            },
            {
                "label": "光纖比銅纜傳送信號的速度快",
                "value": "D"
            }
        ],
        "answer": ["D"]
    },
    {
        "id": "1-24",
        "type": "single",
        "question": "若要提供 1.3GB/s 的資料速率並且與較舊的裝置向後相容，下列哪一項是可以使用的無線網路標準？",
        "options": [
            {
                "label": "IEEE 802a",
                "value": "A"
            },
            {
                "label": "IEEE 802ac",
                "value": "B"
            },
            {
                "label": "IEEE 802n",
                "value": "C"
            },
            {
                "label": "IEEE 802g",
                "value": "D"
            }
        ],
        "answer": ["B"]
    },
    {
        "id": "1-25",
        "type": "single",
        "question": "關於乙太網路的標準，下列哪一項正確？",
        "options": [
            {
                "label": "IEEE 802.3",
                "value": "A"
            },
            {
                "label": "IEEE 802.11",
                "value": "B"
            },
            {
                "label": "IEEE 802.15",
                "value": "C"
            },
            {
                "label": "IEEE 802.16",
                "value": "D"
            }
        ],
        "answer": ["A"]
    },
    {
        "id": "1-26",
        "type": "multiple",
        "question": "關於 IEEE 10BASE5 的定義，下列敘述哪些正確？（複選）",
        "options": [
            {
                "label": "10 表示傳輸速度為 10 Mbps",
                "value": "A"
            },
            {
                "label": "BASE 表示採用基頻信號來進行傳輸",
                "value": "B"
            },
            {
                "label": "5 表示每個網路節點之間最長可達 500 公尺",
                "value": "C"
            },
            {
                "label": "5 表示每個網路節點之間最長可達 5000 公尺",
                "value": "D"
            }
        ],
        "answer": ["A", "B", "C"]
    },
    {
        "id": "1-27",
        "type": "single",
        "question": "關於 IEEE 1000BASE-T 的定義，下列敘述哪一項錯誤？",
        "options": [
            {
                "label": "1000 表示傳輸速度為 1000 Mbp",
                "value": "A"
            },
            {
                "label": "BASE 表示採用基頻信號來進行傳輸",
                "value": "B"
            },
            {
                "label": "T 表示每個網路節點之間最長可達 500 公尺",
                "value": "C"
            },
            {
                "label": "T 表示每個網路節點之間最長可達 100 公尺",
                "value": "D"
            }
        ],
        "answer": ["C"]
    },
    {
        "id": "1-28",
        "type": "single",
        "question": "關於 TIA/EIA-568A 的蕊線排列順序，下列哪一項正確？",
        "options": [
            {
                "label": "白綠、綠、白橘、藍、白藍、橘、白棕、棕",
                "value": "A"
            },
            {
                "label": "白橘、橘、白綠、藍、白藍、綠、白棕、棕",
                "value": "B"
            },
            {
                "label": "白綠、綠、白橘、橘、白藍、藍、白棕、棕",
                "value": "C"
            },
            {
                "label": "白橘、橘、白綠、綠、白藍、藍、白棕、棕",
                "value": "D"
            }
        ],
        "answer": ["A"]
    },
    {
        "id": "1-29",
        "type": "single",
        "question": "乙太網路的直通線，通常用於「電腦到交換器」和「交換器到路由器」的互連，下列敘述哪一項是直通線的標準？",
        "options": [
            {
                "label": "2 端都是 568A 或 568B",
                "value": "A"
            },
            {
                "label": "1 端 568A，另一端是 1568B",
                "value": "B"
            },
            {
                "label": "兩端都不是 2568A 或 568B",
                "value": "C"
            },
            {
                "label": "1 端是 568A 或 568B，另 1 端排列完全對調",
                "value": "D"
            }
        ],
        "answer": ["A"]
    },
    {
        "id": "1-30",
        "type": "single",
        "question": "下列哪一項仍使用同軸電纜來佈線？",
        "options": [
            {
                "label": "無線網路安裝",
                "value": "A"
            },
            {
                "label": "有線電視服務",
                "value": "B"
            },
            {
                "label": "交換器到路由器的互連",
                "value": "C"
            },
            {
                "label": "主機到交換器的互連",
                "value": "D"
            }
        ],
        "answer": ["B"]
    },
    {
        "id": "1-31",
        "type": "single",
        "question": "下列哪一項不是最常用的網路光纖連接器？",
        "options": [
            {
                "label": "ST（Straight-Tip）",
                "value": "A"
            },
            {
                "label": "SC（Subscriber Connector）",
                "value": "B"
            },
            {
                "label": "LC（Lucent Connector）",
                "value": "C"
            },
            {
                "label": "RJ-45",
                "value": "D"
            }
        ],
        "answer": ["D"]
    },
    {
        "id": "1-32",
        "type": "single",
        "question": "關於單個光纖連接使用兩股光纖敘述，下列哪一項正確？",
        "options": [
            {
                "label": "兩股光纖可以使資料傳輸更長距離，並且不會影響性能",
                "value": "A"
            },
            {
                "label": "它們可以防止串音引起連接干擾",
                "value": "B"
            },
            {
                "label": "它們允許全雙工連接",
                "value": "C"
            },
            {
                "label": "它們可以提高資料傳輸速度",
                "value": "D"
            }
        ],
        "answer": ["C"]
    },
    {
        "id": "1-33",
        "type": "single",
        "question": "網路之間的廣域連接有多種形式，下列哪一項錯誤？",
        "options": [
            {
                "label": "RJ-45",
                "value": "A"
            },
            {
                "label": "EIA/TIA-232",
                "value": "B"
            },
            {
                "label": "EIA/TIA-449",
                "value": "C"
            },
            {
                "label": "EIA-530",
                "value": "D"
            }
        ],
        "answer": ["A"]
    },
    {
        "id": "1-34",
        "type": "multiple",
        "question": "關於 IEEE 802.11g 的敘述，下列哪些正確？（複選）",
        "options": [
            {
                "label": "工作頻率為 2.4 GHz",
                "value": "A"
            },
            {
                "label": "速度理論值為 54 Mbps",
                "value": "B"
            },
            {
                "label": "與 IEEE 802.11b 不相容",
                "value": "C"
            },
            {
                "label": "速度理論值與 IEEE 802.11a 一樣",
                "value": "D"
            }
        ],
        "answer": ["A", "B", "D"]
    },
    {
        "id": "1-35",
        "type": "single",
        "question": "若要增強 UTP 纜線中的磁場串音抵銷效果，下列敘述哪一項正確？",
        "options": [
            {
                "label": "減少用於傳輸資料的電線數",
                "value": "A"
            },
            {
                "label": "變化和增加每個線對中的絞合數量",
                "value": "B"
            },
            {
                "label": "增加銅線的厚度",
                "value": "C"
            },
            {
                "label": "增加包裹所有電線的 PVC 護套厚度",
                "value": "D"
            }
        ],
        "answer": ["B"]
    },
    {
        "id": "1-36",
        "type": "single",
        "question": "下列敘述哪一項不應該使用跳接來連接？",
        "options": [
            {
                "label": "路由器到路由器乙太網連接埠",
                "value": "A"
            },
            {
                "label": "電腦到電腦",
                "value": "B"
            },
            {
                "label": "電腦到交換器",
                "value": "C"
            },
            {
                "label": "交換器到交換器",
                "value": "D"
            }
        ],
        "answer": ["C"]
    },
    {
        "id": "1-37",
        "type": "single",
        "question": "下列敘述哪一項是 Cat 5e 網路線可以支援的最大網路傳輸速度？",
        "options": [
            {
                "label": "10 Gbps",
                "value": "A"
            },
            {
                "label": "1000 Mbps",
                "value": "B"
            },
            {
                "label": "100 Gbps",
                "value": "C"
            },
            {
                "label": "1 Tbps",
                "value": "D"
            }
        ],
        "answer": ["B"]
    },
    {
        "id": "1-38",
        "type": "single",
        "question": "在 UTP 安裝中纜線總長度受線的長度，下列哪一項正確？",
        "options": [
            {
                "label": "100 公尺",
                "value": "A"
            },
            {
                "label": "1 公里",
                "value": "B"
            },
            {
                "label": "10 公里",
                "value": "C"
            },
            {
                "label": "100 公里",
                "value": "D"
            }
        ],
        "answer": ["A"]
    },
    {
        "id": "1-39",
        "type": "single",
        "question": "無遮罩式雙絞線，是由幾對帶彩色標記的電線絞合在一起？",
        "options": [
            {
                "label": "8 對",
                "value": "A"
            },
            {
                "label": "6 對",
                "value": "B"
            },
            {
                "label": "2 對",
                "value": "C"
            },
            {
                "label": "4 對",
                "value": "D"
            }
        ],
        "answer": ["D"]
    },
    {
        "id": "1-40",
        "type": "single",
        "question": "下列敘述哪一項說明何謂專有協定？",
        "options": [
            {
                "label": "可供所有組織或供應商自由使用的協定",
                "value": "A"
            },
            {
                "label": "由私人組織所開發且能在所有供應商硬體上執行的協定",
                "value": "B"
            },
            {
                "label": "由控制協定定義和操作的組織所開發的協定",
                "value": "C"
            },
            {
                "label": "稱為 TCP/IP 協定套件的協定集合",
                "value": "D"
            }
        ],
        "answer": ["C"]
    },
    {
        "id": "1-41",
        "type": "single",
        "question": "關於使用開放標準協定的敘述，下列哪一項正確？",
        "options": [
            {
                "label": "執行不同作業系統的用戶端主機和伺服器可以成功交換資料",
                "value": "A"
            },
            {
                "label": "競爭和創新僅限於具體的產品類型",
                "value": "B"
            },
            {
                "label": "Internet 存取可以由每個市場中的單個 ISP 控制",
                "value": "C"
            },
            {
                "label": "網路通訊侷限於來自相同供應商的裝置之間的資料傳輸",
                "value": "D"
            }
        ],
        "answer": ["A"]
    },
    {
        "id": "1-42",
        "type": "single",
        "question": "下列敘述哪一項不是協定必須考慮的要求？",
        "options": [
            {
                "label": "標識出發送者和接收者",
                "value": "A"
            },
            {
                "label": "不通用的語言和語法",
                "value": "B"
            },
            {
                "label": "傳遞的速度和時間",
                "value": "C"
            },
            {
                "label": "證實或確認要求",
                "value": "D"
            }
        ],
        "answer": ["B"]
    },
    {
        "id": "1-43",
        "type": "single",
        "question": "下列哪一項協定，負責控制伺服器和用戶端之間交換 HTTP 訊息的大小和速率？",
        "options": [
            {
                "label": "TCP",
                "value": "A"
            },
            {
                "label": "UDP",
                "value": "B"
            },
            {
                "label": "ICMP",
                "value": "C"
            },
            {
                "label": "IP",
                "value": "D"
            }
        ],
        "answer": ["A"]
    },
    {
        "id": "1-44",
        "type": "single",
        "question": "關於 OSI 模型，下列哪一層可以讓封包在不同的網路之間成功地進行傳遞，並規定了網路的定址方式及不同網路間資料的傳遞方式？",
        "options": [
            {
                "label": "應用層",
                "value": "A"
            },
            {
                "label": "傳輸層",
                "value": "B"
            },
            {
                "label": "資料連結層",
                "value": "C"
            },
            {
                "label": "網路層",
                "value": "D"
            }
        ],
        "answer": ["D"]
    },
    {
        "id": "1-45",
        "type": "single",
        "question": "關於 OSI 模型第四層傳輸層的功能說明，下列敘述哪一項正確？",
        "options": [
            {
                "label": "規劃或選擇資料封包的最佳傳輸路徑",
                "value": "A"
            },
            {
                "label": "根據連接的媒體對資料封包套用組成訊框資訊",
                "value": "B"
            },
            {
                "label": "將訊息切割成區段，並加上編號，以便接收端收到資料後，依編號順序重組",
                "value": "C"
            },
            {
                "label": "向使用者顯示資料，包括編碼和對話控制",
                "value": "D"
            }
        ],
        "answer": ["C"]
    },
    {
        "id": "1-46",
        "type": "single",
        "question": "關於 TCP/IP 和 OSI 模型的敘述，下列哪一項正確？",
        "options": [
            {
                "label": "TCP/IP 模型的網路存取層，與 OSI 的第三層有類似的服務和功能",
                "value": "A"
            },
            {
                "label": "TCP/IP 模型的傳輸層，與 OSI 模型的第四層有類似的服務和功能",
                "value": "B"
            },
            {
                "label": "TCP/IP 模型的應用層，只與 OSI 模型的第七層有相同的服務和功能",
                "value": "C"
            },
            {
                "label": "TCP/IP 和 OSI 模型的層數一模一樣",
                "value": "D"
            }
        ],
        "answer": ["B"]
    },
    {
        "id": "1-47",
        "type": "single",
        "question": "下列哪一項是 OSI 模型的第一層？",
        "options": [
            {
                "label": "實體層",
                "value": "A"
            },
            {
                "label": "資料連結層",
                "value": "B"
            },
            {
                "label": "網路層",
                "value": "C"
            },
            {
                "label": "傳輸層",
                "value": "D"
            }
        ],
        "answer": ["A"]
    },
    {
        "id": "1-48",
        "type": "single",
        "question": "若要描述網路模型的任何層的資料片段，下列哪一項正確？",
        "options": [
            {
                "label": "訊框",
                "value": "A"
            },
            {
                "label": "協定資料單元",
                "value": "B"
            },
            {
                "label": "封包",
                "value": "C"
            },
            {
                "label": "位元",
                "value": "D"
            }
        ],
        "answer": ["B"]
    },
    {
        "id": "1-49",
        "type": "single",
        "question": "當電腦網路卡收到來自網路媒體的位元時，將使用下列哪一種 PDU 格式？",
        "options": [
            {
                "label": "封包",
                "value": "A"
            },
            {
                "label": "資料段",
                "value": "B"
            },
            {
                "label": "訊框",
                "value": "C"
            },
            {
                "label": "位元",
                "value": "D"
            }
        ],
        "answer": ["C"]
    },
    {
        "id": "1-50",
        "type": "single",
        "question": "邏輯位址會在下列 OSI 模型中的哪一層進行封裝？",
        "options": [
            {
                "label": "實體層",
                "value": "A"
            },
            {
                "label": "資料連結層",
                "value": "B"
            },
            {
                "label": "傳輸層",
                "value": "C"
            },
            {
                "label": "網路層",
                "value": "D"
            }
        ],
        "answer": ["D"]
    },
    {
        "id": "1-51",
        "type": "single",
        "question": "關於 MAC 位址的敘述，下列哪一項正確？",
        "options": [
            {
                "label": "MAC 位址由作業系統直接指派",
                "value": "A"
            },
            {
                "label": "MAC 位址是 OSI 第三層的位址",
                "value": "B"
            },
            {
                "label": "前三個位元組是用於廠商分配的 OUI",
                "value": "C"
            },
            {
                "label": "MAC 位址長度為 128 個位元",
                "value": "D"
            }
        ],
        "answer": ["C"]
    },
    {
        "id": "1-52",
        "type": "single",
        "question": "下列哪一項是關於 CSMA/CD 存取方法的缺點？",
        "options": [
            {
                "label": "具有追蹤媒體存取次序的機制",
                "value": "A"
            },
            {
                "label": "所有設備都確保可以存取媒體",
                "value": "B"
            },
            {
                "label": "競爭方法具有確定性",
                "value": "C"
            },
            {
                "label": "碰撞會降低網路性能",
                "value": "D"
            }
        ],
        "answer": ["D"]
    },
    {
        "id": "1-53",
        "type": "single",
        "question": "乙太網路使用下列哪一種方法來檢測和處理碰撞，並管理通信的恢復？",
        "options": [
            {
                "label": "CSMA/CD",
                "value": "A"
            },
            {
                "label": "CSMA/CA",
                "value": "B"
            },
            {
                "label": "CSMA/CAMP",
                "value": "C"
            },
            {
                "label": "CSMA",
                "value": "D"
            }
        ],
        "answer": ["A"]
    },
    {
        "id": "1-54",
        "type": "single",
        "question": "負責路由與邏輯定址，是屬於下列 OSI 模型中的哪一層？",
        "options": [
            {
                "label": "傳輸層",
                "value": "A"
            },
            {
                "label": "網路層",
                "value": "B"
            },
            {
                "label": "資料連結層",
                "value": "C"
            },
            {
                "label": "實體層",
                "value": "D"
            }
        ],
        "answer": ["B"]
    },
    {
        "id": "1-55",
        "type": "single",
        "question": "IPv4 位址是由多少位元組成？",
        "options": [
            {
                "label": "128 位元",
                "value": "A"
            },
            {
                "label": "64 位元",
                "value": "B"
            },
            {
                "label": "32 位元",
                "value": "C"
            },
            {
                "label": "16 位元",
                "value": "D"
            }
        ],
        "answer": ["C"]
    },
    {
        "id": "1-56",
        "type": "single",
        "question": "子網路遮罩 255.255.255.240，下列敘述哪一項正確？",
        "options": [
            {
                "label": "/25",
                "value": "A"
            },
            {
                "label": "/26",
                "value": "B"
            },
            {
                "label": "/27",
                "value": "C"
            },
            {
                "label": "/28",
                "value": "D"
            }
        ],
        "answer": ["D"]
    },
    {
        "id": "1-57",
        "type": "single",
        "question": "分配給網路中終端設備的位址名稱，下列哪一項正確？",
        "options": [
            {
                "label": "主機位址",
                "value": "A"
            },
            {
                "label": "廣播位址",
                "value": "B"
            },
            {
                "label": "網路位址",
                "value": "C"
            },
            {
                "label": "連接埠位址",
                "value": "D"
            }
        ],
        "answer": ["A"]
    },
    {
        "id": "1-58",
        "type": "single",
        "question": "關於實體層標準管理的功能，下列哪一項錯誤？",
        "options": [
            {
                "label": "實體元件",
                "value": "A"
            },
            {
                "label": "路由",
                "value": "B"
            },
            {
                "label": "編碼",
                "value": "C"
            },
            {
                "label": "訊號",
                "value": "D"
            }
        ],
        "answer": ["B"]
    },
    {
        "id": "1-59",
        "type": "single",
        "question": "下列哪一項不是網路中使用銅纜的三種主要類型之一？",
        "options": [
            {
                "label": "非遮蔽雙絞線",
                "value": "A"
            },
            {
                "label": "遮蔽雙絞線",
                "value": "B"
            },
            {
                "label": "光纖",
                "value": "C"
            },
            {
                "label": "同軸電纜",
                "value": "D"
            }
        ],
        "answer": ["C"]
    },
    {
        "id": "1-60",
        "type": "single",
        "question": "下列哪一個是制定反轉線的組織？",
        "options": [
            {
                "label": "ISO",
                "value": "A"
            },
            {
                "label": "IEEE",
                "value": "B"
            },
            {
                "label": "ITU",
                "value": "C"
            },
            {
                "label": "Cisco",
                "value": "D"
            }
        ],
        "answer": ["D"]
    },
    {
        "id": "1-61",
        "type": "single",
        "question": "關於全雙工通訊的工作原理，下列敘述哪一項正確？",
        "options": [
            {
                "label": "兩個裝置均可同時透過媒體進行發送和接收",
                "value": "A"
            },
            {
                "label": "兩個裝置都可以透過媒體進行發送和接收，但不可同時進行",
                "value": "B"
            },
            {
                "label": "一個裝置只能透過媒體接收，另一個裝置只能透過媒體發送",
                "value": "C"
            },
            {
                "label": "兩個裝置隨機透過媒體進行發送和接收",
                "value": "D"
            }
        ],
        "answer": ["A"]
    },
    {
        "id": "1-62",
        "type": "single",
        "question": "可向網路中所有主機發送資料的特殊位址，下列哪一項正確？",
        "options": [
            {
                "label": "主機位址",
                "value": "A"
            },
            {
                "label": "廣播位址",
                "value": "B"
            },
            {
                "label": "網路位址",
                "value": "C"
            },
            {
                "label": "連接埠位址",
                "value": "D"
            }
        ],
        "answer": ["B"]
    },
    {
        "id": "1-63",
        "type": "single",
        "question": "關於廣播位址的定義，下列哪一項正確？",
        "options": [
            {
                "label": "網路部分的各位元全部為 1 的位址",
                "value": "A"
            },
            {
                "label": "主機部分的各位元全部為 0 的位址",
                "value": "B"
            },
            {
                "label": "網路部分的各位元全部為 0 的位址",
                "value": "C"
            },
            {
                "label": "主機部分的各位元全部為 1 的位址",
                "value": "D"
            }
        ],
        "answer": ["D"]
    },
    {
        "id": "1-64",
        "type": "single",
        "question": "關於 MAC 位址中的廣播位址數值，下列哪一項正確？",
        "options": [
            {
                "label": "FF:FF:FF:FF:FF:FF",
                "value": "A"
            },
            {
                "label": "127.0.0.1",
                "value": "B"
            },
            {
                "label": "Fe80::1",
                "value": "C"
            },
            {
                "label": "80",
                "value": "D"
            }
        ],
        "answer": ["A"]
    },
    {
        "id": "1-65",
        "type": "single",
        "question": "主機若要確保資料封包可以轉送到正確的目的網路，下列敘述哪一項正確？",
        "options": [
            {
                "label": "主機不須具有自己的本地路由表，只要路由器具有遠端預設路由即可",
                "value": "A"
            },
            {
                "label": "主機必須具有自己的本地路由表，其中包含迴路介面的路由、本地網路路由和遠端預設路由",
                "value": "B"
            },
            {
                "label": "主機必須具有自己的迴路介面的路由，但不需具有本地網路路由和遠端預設路由",
                "value": "C"
            },
            {
                "label": "主機只需設定 IP 位址即可，不須設定預設閘道",
                "value": "D"
            }
        ],
        "answer": ["B"]
    },
    {
        "id": "1-66",
        "type": "single",
        "question": "下列敘述哪一項不是在設定靜態 IP 時，所需要設定的 IP 參數？",
        "options": [
            {
                "label": "IP 位址",
                "value": "A"
            },
            {
                "label": "子網路遮罩",
                "value": "B"
            },
            {
                "label": "MAC 位址",
                "value": "C"
            },
            {
                "label": "預設閘道位址",
                "value": "D"
            }
        ],
        "answer": [
            "C"
        ]
    },
    {
        "id": "1-67",
        "type": "single",
        "question": "網路層將封包轉送到目的位址的程序名稱，下列哪一項正確？",
        "options": [
            {
                "label": "封裝",
                "value": "A"
            },
            {
                "label": "解封裝",
                "value": "B"
            },
            {
                "label": "定址",
                "value": "C"
            },
            {
                "label": "路由",
                "value": "D"
            }
        ],
        "answer": ["D"]
    },
    {
        "id": "1-68",
        "type": "single",
        "question": "在 IP 網路中，可使用下列哪一個位址將封包轉送到目的地？",
        "options": [
            {
                "label": "目的 IP 位址",
                "value": "A"
            },
            {
                "label": "目的 MAC 位址",
                "value": "B"
            },
            {
                "label": "來源 IP 位址",
                "value": "C"
            },
            {
                "label": "來源 MAC 位址",
                "value": "D"
            }
        ],
        "answer": ["A"]
    },
    {
        "id": "1-69",
        "type": "single",
        "question": "在第二層交換器中，可使用下列哪一個位址將訊框轉送到目的地？",
        "options": [
            {
                "label": "目的 IP 位址",
                "value": "A"
            },
            {
                "label": "目的 MAC 位址",
                "value": "B"
            },
            {
                "label": "來源 IP 位址",
                "value": "C"
            },
            {
                "label": "來源 MAC 位址",
                "value": "D"
            }
        ],
        "answer": ["B"]
    },
    {
        "id": "1-70",
        "type": "single",
        "question": "下列敘述哪一項不是 LAN 的具體功能？",
        "options": [
            {
                "label": "LAN 在有線區域內互連終端裝置",
                "value": "A"
            },
            {
                "label": "LAN 通常由一個組織或個人管理",
                "value": "B"
            },
            {
                "label": "LAN 通常由多個服務供應商管理",
                "value": "C"
            },
            {
                "label": "LAN 為內部終端裝置和中介裝置提供高速頻寬",
                "value": "D"
            }
        ],
        "answer": ["C"]
    },
    {
        "id": "2-01",
        "type": "multiple",
        "question": "在網際網路裡傳送每個封包中，均會包含下列哪些資訊？（複選）",
        "options": [
            {
                "label": "來源 IP 位址",
                "value": "A"
            },
            {
                "label": "目的主機名稱",
                "value": "B"
            },
            {
                "label": "目的 IP 位址",
                "value": "C"
            },
            {
                "label": "路由器 IP 位址",
                "value": "D"
            }
        ],
        "answer": ["A", "C"]
    },
    {
        "id": "2-02",
        "type": "single",
        "question": "一般主機通常需要安裝下列哪一項介面卡，才能連接上網際網路？",
        "options": [
            {
                "label": "SCSI 介面卡",
                "value": "A"
            },
            {
                "label": "RAID 介面卡",
                "value": "B"
            },
            {
                "label": "VGA 介面卡",
                "value": "C"
            },
            {
                "label": "NIC 介面卡",
                "value": "D"
            }
        ],
        "answer": ["D"]
    },
    {
        "id": "2-03",
        "type": "single",
        "question": "IPv4 位址總共有多少個位元組？",
        "options": [
            {
                "label": "4",
                "value": "A"
            },
            {
                "label": "8",
                "value": "B"
            },
            {
                "label": "12",
                "value": "C"
            },
            {
                "label": "32",
                "value": "D"
            }
        ],
        "answer": ["A"]
    },
    {
        "id": "2-04",
        "type": "single",
        "question": "二進制的 IPv4 位址並不方便人們解讀，因此 IPv4 位址採用下列哪一種表示方式？",
        "options": [
            {
                "label": "冒號分隔十六進制",
                "value": "A"
            },
            {
                "label": "冒號分隔十進制",
                "value": "B"
            },
            {
                "label": "點分隔十六進制",
                "value": "C"
            },
            {
                "label": "點分隔十進制",
                "value": "D"
            }
        ],
        "answer": ["D"]
    },
    {
        "id": "2-05",
        "type": "single",
        "question": "IPv4 位址 11000000.10100010.01111110.01000101 的點分隔十進制表示法，下列哪一項正確？",
        "options": [
            {
                "label": "192.168.126.73",
                "value": "A"
            },
            {
                "label": "192.164.126.71",
                "value": "B"
            },
            {
                "label": "192.162.126.69",
                "value": "C"
            },
            {
                "label": "192.168.126.67",
                "value": "D"
            }
        ],
        "answer": ["C"]
    },
    {
        "id": "2-06",
        "type": "single",
        "question": "IPv4 位址 172.16.223.191，其中 223 的二進制內容哪一項正確？",
        "options": [
            {
                "label": "11110111",
                "value": "A"
            },
            {
                "label": "11101111",
                "value": "B"
            },
            {
                "label": "11011111",
                "value": "C"
            },
            {
                "label": "10111111",
                "value": "D"
            }
        ],
        "answer": ["C"]
    },
    {
        "id": "2-07",
        "type": "multiple",
        "question": "IPv4 位址格式為點分隔十進制，下列哪些 IP 位址是正確有效的位址？（複選）",
        "options": [
            {
                "label": "10.123.256.10",
                "value": "A"
            },
            {
                "label": "192.199.23.5",
                "value": "B"
            },
            {
                "label": "198.FF.131.224",
                "value": "C"
            },
            {
                "label": "16.168.16.67",
                "value": "D"
            }
        ],
        "answer": ["B", "D"]
    },
    {
        "id": "2-08",
        "type": "single",
        "question": "IPv4 位址 61.111.128.32 的 32 位元二進制內容，下列哪一項正確？",
        "options": [
            {
                "label": "00111001.01101101.10000000.00100000",
                "value": "A"
            },
            {
                "label": "00111001.01101111.10000000.00100000",
                "value": "B"
            },
            {
                "label": "00111101.01101101.10000000.00100000",
                "value": "C"
            },
            {
                "label": "00111101.01101111.10000000.00100000",
                "value": "D"
            }
        ],
        "answer": ["D"]
    },
    {
        "id": "2-09",
        "type": "single",
        "question": "IPv4 位址 10001000.00101010.01111110.01010101 的點分隔十進制表示法，下列哪一項正確？",
        "options": [
            {
                "label": "136.42.126.85",
                "value": "A"
            },
            {
                "label": "138.42.124.85",
                "value": "B"
            },
            {
                "label": "136.42.124.85",
                "value": "C"
            },
            {
                "label": "138.42.126.85",
                "value": "D"
            }
        ],
        "answer": ["A"]
    },
    {
        "id": "2-10",
        "type": "single",
        "question": "32 位元的 IPv4 位址結構可以分成網路與主機兩個部分，可依下列哪一項資訊判別位元屬於網路部分或主機部分？",
        "options": [
            {
                "label": "安裝的作業系統",
                "value": "A"
            },
            {
                "label": "設定的網路遮罩",
                "value": "B"
            },
            {
                "label": "網路設備品牌",
                "value": "C"
            },
            {
                "label": "採用的路由協定",
                "value": "D"
            }
        ],
        "answer": ["B"]
    },
    {
        "id": "2-11",
        "type": "single",
        "question": "關於 IP 位址 192.168.10.248 與網路遮罩關係，下列敘述哪一項正確？",
        "options": [
            {
                "label": "網路遮罩為 255.255.255.224 時，該 IP 位址代表網路位址",
                "value": "A"
            },
            {
                "label": "網路遮罩為 255.255.255.240 時，該 IP 位址代表一般主機位址",
                "value": "B"
            },
            {
                "label": "網路遮罩為 255.255.255.248 時，該 IP 位址代表廣播位址",
                "value": "C"
            },
            {
                "label": "網路遮罩為 255.255.255.252 時，該 IP 位址代表一般主機位址",
                "value": "D"
            }
        ],
        "answer": ["B"]
    },
    {
        "id": "2-12",
        "type": "multiple",
        "question": "下列哪些可在電腦主機上設定的合法 IPv4 位址，並且可以連接上網際網路？（複選）",
        "options": [
            {
                "label": "89.134.252.249",
                "value": "A"
            },
            {
                "label": "223.254.18.19",
                "value": "B"
            },
            {
                "label": "127.0.1.12",
                "value": "C"
            },
            {
                "label": "255.155.122.71",
                "value": "D"
            }
        ],
        "answer": ["A", "B"]
    },
    {
        "id": "2-13",
        "type": "single",
        "question": "電腦 A 的 IP 位址為 192.168.2.101，電腦 B 的 IP 位址為 192.198.2.224，當電腦 A 有資料要傳送給電腦 B 時，下列敘述哪一項正確？",
        "options": [
            {
                "label": "電腦 A 將資料透過網路卡直接傳送給電腦 B",
                "value": "A"
            },
            {
                "label": "電腦 A 需先檢查網路線的類型是否為直通電纜（Straigh-Trough）才能傳送",
                "value": "B"
            },
            {
                "label": "電腦 A 需要先透過網路遮罩判別電腦 B 是否與自己位在相同網段",
                "value": "C"
            },
            {
                "label": "電腦 A 需要透過路由器才能將資料傳送給電腦 B",
                "value": "D"
            }
        ],
        "answer": ["C"]
    },
    {
        "id": "2-14",
        "type": "single",
        "question": "電腦 A 的 IP 位址為 172.16.1.121，電腦 B 的 IP 位址為 172.16.2.0，兩部電腦採用相同的網路遮罩，則下列敘述哪一項正確？",
        "options": [
            {
                "label": "若網路遮罩為 255.255.255.0，則兩部電腦位於相同網路網段",
                "value": "A"
            },
            {
                "label": "若網路遮罩為 255.255.254.0，則兩部電腦位於相同網路網段",
                "value": "B"
            },
            {
                "label": "若網路遮罩為 255.255.252.0，則兩部電腦位於相同網路網段",
                "value": "C"
            },
            {
                "label": "兩部電腦不可能位於相同的網路網段，因為電腦 B 的位址是錯誤的",
                "value": "D"
            }
        ],
        "answer": ["C"]
    },
    {
        "id": "2-15",
        "type": "multiple",
        "question": "下列哪些 IP 位址屬於 172.16.10.0/23 網段範圍內？（複選）",
        "options": [
            {
                "label": "172.16.10.255",
                "value": "A"
            },
            {
                "label": "172.16.11.128",
                "value": "B"
            },
            {
                "label": "172.16.12.64",
                "value": "C"
            },
            {
                "label": "172.16.11.254",
                "value": "D"
            }
        ],
        "answer": ["A", "B", "D"]
    },
    {
        "id": "2-16",
        "type": "single",
        "question": "IP 位址 10.172.193.33 搭配網路遮罩為 255.255.254.0，則該 IP 位址所屬的網段網路位址，下列哪一項正確？",
        "options": [
            {
                "label": "10.172.191.0",
                "value": "A"
            },
            {
                "label": "10.172.192.0",
                "value": "B"
            },
            {
                "label": "10.172.193.0",
                "value": "C"
            },
            {
                "label": "10.172.194.0",
                "value": "D"
            }
        ],
        "answer": ["B"]
    },
    {
        "id": "2-17",
        "type": "single",
        "question": "IP 位址與網路遮罩間，透過下列哪一項運算可以得到網路位址資訊？",
        "options": [
            {
                "label": "NOT",
                "value": "A"
            },
            {
                "label": "AND",
                "value": "B"
            },
            {
                "label": "OR",
                "value": "C"
            },
            {
                "label": "XOR",
                "value": "D"
            }
        ],
        "answer": ["B"]
    },
    {
        "id": "2-18",
        "type": "single",
        "question": "下列哪一個位址是屬於 B 級別的有效 IP 位址？",
        "options": [
            {
                "label": "191.128.254.256",
                "value": "A"
            },
            {
                "label": "127.0.0.1",
                "value": "B"
            },
            {
                "label": "177.255.21.56",
                "value": "C"
            },
            {
                "label": "192.1.10.192",
                "value": "D"
            }
        ],
        "answer": ["C"]
    },
    {
        "id": "2-19",
        "type": "single",
        "question": "IP 位址 191.224.232.15 的預設網路遮罩，下列哪一項正確？",
        "options": [
            {
                "label": "255.0.0.0",
                "value": "A"
            },
            {
                "label": "255.255.0.0",
                "value": "B"
            },
            {
                "label": "255.255.255.0",
                "value": "C"
            },
            {
                "label": "255.255.255.255",
                "value": "D"
            }
        ],
        "answer": ["B"]
    },
    {
        "id": "2-20",
        "type": "single",
        "question": "IPv4 及 IPv6 位址的最上層分配管理單位為 IANA（Internet Assigned Numbers Authority），IANA 底下有五個位址註冊機構 RIR（Regional Internet Registry），下列哪一項不屬於 RIR 之一？",
        "options": [
            {
                "label": "ARIN（American Registry for Internet Numbers）",
                "value": "A"
            },
            {
                "label": "LACNIC（Latin America and Caribbean Network Information Centre）",
                "value": "B"
            },
            {
                "label": "RIPE NCC（Réseaux IP Européens Network Coordination Centre）",
                "value": "C"
            },
            {
                "label": "IETF（Internet Engineering Task Force）",
                "value": "D"
            }
        ],
        "answer": ["D"]
    },
    {
        "id": "2-21",
        "type": "single",
        "question": "IP 位址 224.0.0.10 屬於下列有級別位址的哪一類？",
        "options": [
            {
                "label": "A",
                "value": "A"
            },
            {
                "label": "B",
                "value": "B"
            },
            {
                "label": "C",
                "value": "C"
            },
            {
                "label": "D",
                "value": "D"
            }
        ],
        "answer": ["D"]
    },
    {
        "id": "2-22",
        "type": "single",
        "question": "有級別的 IPv4 網路位址中，扣除多點傳送（Multicast）及實驗（Experimental）保留不使用的部分，剩下的總共分為幾個級別？",
        "options": [
            {
                "label": "1",
                "value": "A"
            },
            {
                "label": "2",
                "value": "B"
            },
            {
                "label": "3",
                "value": "C"
            },
            {
                "label": "4",
                "value": "D"
            }
        ],
        "answer": ["C"]
    },
    {
        "id": "2-23",
        "type": "single",
        "question": "B 類的有級別網路位址，其預設網路遮罩下列哪一項正確？",
        "options": [
            {
                "label": "255.0.0.0",
                "value": "A"
            },
            {
                "label": "255.255.0.0",
                "value": "B"
            },
            {
                "label": "255.255.255.0",
                "value": "C"
            },
            {
                "label": "255.255.255.255",
                "value": "D"
            }
        ],
        "answer": ["B"]
    },
    {
        "id": "2-24",
        "type": "single",
        "question": "關於有級別網路位址的敘述，下列哪一項錯誤？",
        "options": [
            {
                "label": "A 級別的所有 IP 位址數量最多",
                "value": "A"
            },
            {
                "label": "B 級別的所有 IP 是 C 級別的 255 倍",
                "value": "B"
            },
            {
                "label": "C 級別的預設網路遮罩為 255.255.255.0",
                "value": "C"
            },
            {
                "label": "D 級別用於多點傳送（Multicast）",
                "value": "D"
            }
        ],
        "answer": ["B"]
    },
    {
        "id": "2-25",
        "type": "multiple",
        "question": "下列哪些 IP 位址屬於 RFC 1918 所規定的私有 IP 範圍？（複選）",
        "options": [
            {
                "label": "10.192.10.128",
                "value": "A"
            },
            {
                "label": "172.32.128.192",
                "value": "B"
            },
            {
                "label": "192.168.100.251",
                "value": "C"
            },
            {
                "label": "172.19.224.252",
                "value": "D"
            }
        ],
        "answer": ["A", "C", "D"]
    },
    {
        "id": "2-26",
        "type": "single",
        "question": "下列哪一個 IPv4 位址不屬於 RFC 1918 所規定的私有 IP 範圍？",
        "options": [
            {
                "label": "10.224.232.128",
                "value": "A"
            },
            {
                "label": "192.168.22.21",
                "value": "B"
            },
            {
                "label": "172.64.21.10",
                "value": "C"
            },
            {
                "label": "172.31.192.168",
                "value": "D"
            }
        ],
        "answer": ["C"]
    },
    {
        "id": "2-27",
        "type": "single",
        "question": "全球共有幾個 IPv4 及 IPv6 位址的分配管理單位的位址，註冊機構 RIR（Regional Internet Registry）？",
        "options": [
            {
                "label": "4",
                "value": "A"
            },
            {
                "label": "5",
                "value": "B"
            },
            {
                "label": "6",
                "value": "C"
            },
            {
                "label": "8",
                "value": "D"
            }
        ],
        "answer": ["B"]
    },
    {
        "id": "2-28",
        "type": "single",
        "question": "私有的 IPv4 位址無法直接在網際網路上繞送，必須先透過下列哪一個技術轉換成公用 IP 位址？",
        "options": [
            {
                "label": "RIP",
                "value": "A"
            },
            {
                "label": "NAT",
                "value": "B"
            },
            {
                "label": "DHCP",
                "value": "C"
            },
            {
                "label": "NTP",
                "value": "D"
            }
        ],
        "answer": ["B"]
    },
    {
        "id": "2-29",
        "type": "single",
        "question": "一般用於主從式（Client-Sever）或同儕式（Peer-to-Peer）主機對主機的傳送型態，下列哪一項正確？",
        "options": [
            {
                "label": "Multicast",
                "value": "A"
            },
            {
                "label": "Broadcast",
                "value": "B"
            },
            {
                "label": "Anycast",
                "value": "C"
            },
            {
                "label": "Unicast",
                "value": "D"
            }
        ],
        "answer": ["D"]
    },
    {
        "id": "2-30",
        "type": "single",
        "question": "下列哪一項 IPv4 位址，不會出現在封包的來源位址欄位中？",
        "options": [
            {
                "label": "10.10.1.1",
                "value": "A"
            },
            {
                "label": "255.255.255.255",
                "value": "B"
            },
            {
                "label": "192.168.10.1",
                "value": "C"
            },
            {
                "label": "0.0.0.0",
                "value": "D"
            }
        ],
        "answer": ["B"]
    },
    {
        "id": "2-31",
        "type": "single",
        "question": "路由協定 RIP 第二版用於交換路由資料的傳送方式，屬於下列哪一種傳送型態？",
        "options": [
            {
                "label": "Unicast",
                "value": "A"
            },
            {
                "label": "Broadcast",
                "value": "B"
            },
            {
                "label": "Multicast",
                "value": "C"
            },
            {
                "label": "Anycast",
                "value": "D"
            }
        ],
        "answer": ["C"]
    },
    {
        "id": "2-32",
        "type": "multiple",
        "question": "關於 IPv4 位址的敘述，下列哪些正確？（複選）",
        "options": [
            {
                "label": "私有 IP 是免費的，也節省了 IP 位址資源，適合在區域網路使用",
                "value": "A"
            },
            {
                "label": "所有 IPv4 的位址均可以使用，但是不同主機不能使用相同的 IP 位址",
                "value": "B"
            },
            {
                "label": "標準交換器可以用於隔離廣播，避免廣播流量影響太大範圍",
                "value": "C"
            },
            {
                "label": "有限廣播（Limited Broadcast）的位址為 255.255.255.255",
                "value": "D"
            }
        ],
        "answer": ["A", "D"]
    },
    {
        "id": "2-33",
        "type": "single",
        "question": "關於廣播位址，下列敘述哪一項錯誤？",
        "options": [
            {
                "label": "預設遮罩環境下，IPv4 位址 192.168.100.255 為廣播位址",
                "value": "A"
            },
            {
                "label": "廣播可以區分為直接廣播（Directed）及有限（Limited）廣播兩種",
                "value": "B"
            },
            {
                "label": "當主機收到廣播封包時，其處理方式與單點傳送（Unicast）封包不同",
                "value": "C"
            },
            {
                "label": "直接廣播（Directed）是傳給特定網段的所有設備接收",
                "value": "D"
            }
        ],
        "answer": ["C"]
    },
    {
        "id": "2-34",
        "type": "multiple",
        "question": "Windows 主機手動設定 IPv4 資料時，至少需要設定下列哪些欄位才能連上網際網路？（複選）",
        "options": [
            {
                "label": "預設閘道",
                "value": "A"
            },
            {
                "label": "IP 位址",
                "value": "B"
            },
            {
                "label": "網卡 MAC 位址",
                "value": "C"
            },
            {
                "label": "子網路遮罩",
                "value": "D"
            }
        ],
        "answer": ["A", "B", "D"]
    },
    {
        "id": "2-35",
        "type": "single",
        "question": "關於 IP 位址設定方式的敘述，下列敘述哪一項錯誤？",
        "options": [
            {
                "label": "印表機、伺服器及網路設備適合使用靜態方式指定 IP 位址",
                "value": "A"
            },
            {
                "label": "大型企業適合為所有員工配置靜態方式之 IP 位址，以避免 IP 衝突發生",
                "value": "B"
            },
            {
                "label": "動態配置 IP 位址需要搭配 DHCP 服務",
                "value": "C"
            },
            {
                "label": "筆記型電腦等行動裝置適合採用動態方式指定 IP 位址",
                "value": "D"
            }
        ],
        "answer": ["B"]
    },
    {
        "id": "2-36",
        "type": "single",
        "question": "關於預設閘道的敘述，下列哪一項正確？",
        "options": [
            {
                "label": "預設閘道是路由器的網路介面，而目的電腦連接在該介面上",
                "value": "A"
            },
            {
                "label": "由交換器擔任預設閘道服務，不管多少介面只能設定一個 IP 位址",
                "value": "B"
            },
            {
                "label": "當封包需要傳往另一個 IP 網段時，該封包將交由預設閘道轉送",
                "value": "C"
            },
            {
                "label": "預設閘道的 IP 必須與自己位於不同的 IP 網段，方能傳輸資料",
                "value": "D"
            }
        ],
        "answer": ["C"]
    },
    {
        "id": "2-37",
        "type": "single",
        "question": "在一般企業環境中，下列哪一個裝置較不適合採用靜態方式指定 IP 位址？",
        "options": [
            {
                "label": "位於配線間之機架式交換器",
                "value": "A"
            },
            {
                "label": "僅供內部使用之企業網站",
                "value": "B"
            },
            {
                "label": "連接 ISP 之對外路由器",
                "value": "C"
            },
            {
                "label": "網管部門診斷用筆記型電腦",
                "value": "D"
            }
        ],
        "answer": ["D"]
    },
    {
        "id": "2-38",
        "type": "single",
        "question": "下列哪一個 Windows 命令，可以查看透過 DHCP 所取得的 IP 位址及 DHCP 伺服器位址等相關資訊？",
        "options": [
            {
                "label": "netstat -rn",
                "value": "A"
            },
            {
                "label": "ipconfig/all",
                "value": "B"
            },
            {
                "label": "netstat -p ip",
                "value": "C"
            },
            {
                "label": "msconfig",
                "value": "D"
            }
        ],
        "answer": ["B"]
    },
    {
        "id": "2-39",
        "type": "single",
        "question": "當 DHCP 用戶端想透過 DHCP 伺服器取得 IP 位址，用戶端會先發出 DHCPDISCOVER 訊息，該訊息所攜帶的目的地 IP 位址及目的地 MAC 位址，下列何者正確？",
        "options": [
            {
                "label": "目的地 IP 位址為 255.255.255.255；目的地 MAC 位址為00-00-00-00-00-00",
                "value": "A"
            },
            {
                "label": "目的地 IP 位址為 0.0.0.0；目的地 MAC 位址為 FF-FF-FF-FF-FF-FF",
                "value": "B"
            },
            {
                "label": "目的地 IP 位址為 0.0.0.0；目的地 MAC 位址為 00-00-00-00-00-00",
                "value": "C"
            },
            {
                "label": "目的地 IP 位址為 255.255.255.255；目的地 MAC 位址為 FF-FF-FF-FF-FF-FF",
                "value": "D"
            }
        ],
        "answer": ["D"]
    },
    {
        "id": "2-40",
        "type": "single",
        "question": "當某部主機採用自動取得 IP 位址之設定，這需要透過下列哪一種網路服務達成？",
        "options": [
            {
                "label": "DNS",
                "value": "A"
            },
            {
                "label": "DHCP",
                "value": "B"
            },
            {
                "label": "HTTP",
                "value": "C"
            },
            {
                "label": "HTTPS",
                "value": "D"
            }
        ],
        "answer": ["B"]
    },
    {
        "id": "2-41",
        "type": "single",
        "question": "一般正常 DHCP 自動取得 IP 環境中，用戶端需要傳送出幾個 DHCP 訊息？",
        "options": [
            {
                "label": "1",
                "value": "A"
            },
            {
                "label": "2",
                "value": "B"
            },
            {
                "label": "3",
                "value": "C"
            },
            {
                "label": "4",
                "value": "D"
            }
        ],
        "answer": ["B"]
    },
    {
        "id": "2-42",
        "type": "multiple",
        "question": "使用 DHCP 服務時，具有下列哪些特性？（複選）",
        "options": [
            {
                "label": "IP 位址是租用型態，租用期限到達可以收回，再改配給其他裝置",
                "value": "A"
            },
            {
                "label": "DHCP 伺服器只能架設在 Windows 或 Linux 主機上",
                "value": "B"
            },
            {
                "label": "IP 位址是動態分配，因此不一定都取到同一個 IP 位址",
                "value": "C"
            },
            {
                "label": "除了可以動態提供 IP 位址、網路遮罩、預設閘道資訊外，透過設定還可以提供 DNS 伺服器或 WINS 伺服器位址",
                "value": "D"
            }
        ],
        "answer": ["A", "C", "D"]
    },
    {
        "id": "2-43",
        "type": "single",
        "question": "路由器介面所設定之 IP 位址為 172.16.1.254，且網路遮罩設定為 255.255.255.224 時，則該路由器介面所連接網段的網路位址，下列哪一項正確？",
        "options": [
            {
                "label": "172.16.1.0",
                "value": "A"
            },
            {
                "label": "172.16.1.128",
                "value": "B"
            },
            {
                "label": "172.16.1.192",
                "value": "C"
            },
            {
                "label": "172.16.1.224",
                "value": "D"
            }
        ],
        "answer": ["D"]
    },
    {
        "id": "2-44",
        "type": "multiple",
        "question": "下列哪些是有效的 IPv6 位址？（複選）",
        "options": [
            {
                "label": "2001:FF10::FD01",
                "value": "A"
            },
            {
                "label": "2001:167:A09D:332F:21G4:2290:FD01:C1D1",
                "value": "B"
            },
            {
                "label": "FE80::1",
                "value": "C"
            },
            {
                "label": "2001:ACAD:0:5016:1400:F67A:3211",
                "value": "D"
            }
        ],
        "answer": ["A", "C"]
    },
    {
        "id": "2-45",
        "type": "single",
        "question": "關於內部的私有 IP 位址與外部的功用 IP 位址之間的轉換技術，下列哪一項正確？",
        "options": [
            {
                "label": "NAN",
                "value": "A"
            },
            {
                "label": "NTP",
                "value": "B"
            },
            {
                "label": "NAT",
                "value": "C"
            },
            {
                "label": "NTT",
                "value": "D"
            }
        ],
        "answer": ["C"]
    },
    {
        "id": "2-46",
        "type": "single",
        "question": "IPv6 位址未如預期很快在 2003 年取代 IPv4，除了設備沒辦法全面支援外，還有下列哪一個原因？",
        "options": [
            {
                "label": "IPv6 尚無法與 IPv4 設備互通，使用者普遍不願意更換到 IPv6",
                "value": "A"
            },
            {
                "label": "IP 位址的需求未如預期，十年內尚有足夠的 IPv4 位址可供分配",
                "value": "B"
            },
            {
                "label": "無 DHCP 伺服器協助，得手動設定 IPv6 位址，使得使用者意願不高",
                "value": "C"
            },
            {
                "label": "私有 IP 位址及 NAT 技術，減緩 IPv4 位址的消耗速度",
                "value": "D"
            }
        ],
        "answer": ["D"]
    },
    {
        "id": "2-47",
        "type": "single",
        "question": "IP 網段 A 中的電腦主機，若要能跟另一個 IP 網段 B 的電腦主機通訊，需要倚靠下列哪一個網路裝置？",
        "options": [
            {
                "label": "路由器（Router）",
                "value": "A"
            },
            {
                "label": "集線器（HUB）",
                "value": "B"
            },
            {
                "label": "交換器（Switch）",
                "value": "C"
            },
            {
                "label": "橋接器（Bridge）",
                "value": "D"
            }
        ],
        "answer": ["A"]
    },
    {
        "id": "2-48",
        "type": "single",
        "question": "如圖所示，為家用無線路由器或 IP 分享器的 DHCP 伺服器設定畫面，設定資料中的「Maximum number of Users:50」，下列敘述哪⼀項正確？",
        "media": {
            "type": "table",
            "data": [
                [["<map><img src=\"images/2-48.png\" alt=\"題目 2-48 圖片\"></map>"]]
            ]
        },
        "options": [
            {
                "label": "只能累計提供 50 位用戶端的 IP 租用服務",
                "value": "A"
            },
            {
                "label": "該無線路由器或 IP 分享器最多僅能連接 50 位使用者",
                "value": "B"
            },
            {
                "label": "使用者取得 IP 之後最多可以使用 50 分鐘",
                "value": "C"
            },
            {
                "label": "最多提供 50 個 IP 位址的租用服務",
                "value": "D"
            }
        ],
        "answer": ["D"]
    },
    {
        "id": "2-49",
        "type": "single",
        "question": "關於家用無線路由器或 IP 分享器的敘述，下列哪一項正確？",
        "options": [
            {
                "label": "無線路由器或 IP 分享器連接 ISP 的介面，必須手動靜態設定 IP 位址",
                "value": "A"
            },
            {
                "label": "無線路由器或 IP 分享器所連接的內部無線網路，與有線網路為不同的 IP 網段",
                "value": "B"
            },
            {
                "label": "內部網段可以透過無線路由器或 IP 分享器的 DHCP 伺服器功能配置 IP 位址",
                "value": "C"
            },
            {
                "label": "無線網路服務不需要透過 NAT 轉換位址，但內部有線網路則需要 NAT 轉換位址",
                "value": "D"
            }
        ],
        "answer": ["C"]
    },
    {
        "id": "2-50",
        "type": "single",
        "question": "如附圖所示，為家用無線路由器或 IP 分享器的 DHCP 伺服器設定畫面，當用戶端透過此 DHCP 伺服器取得 IP 位址資訊時，預設閘道的位址設定，下列哪一項正確？",
        "media": {
            "type": "table",
            "data": [
                [["<map><img src=\"images/2-50.png\" alt=\"題目 2-50 圖片\"></map>"]]
            ]
        },
        "options": [
            {
                "label": "192.168.1.1",
                "value": "A"
            },
            {
                "label": "192.168.1.20",
                "value": "B"
            },
            {
                "label": "192.168.1.69",
                "value": "C"
            },
            {
                "label": "192.168.1.100",
                "value": "D"
            }
        ],
        "answer": ["A"]
    },
    {
        "id": "2-51",
        "type": "single",
        "question": "設定家用無線路由器或 IP 分享器的 DHCP 伺服器服務時，下列敘述哪一項正確？",
        "options": [
            {
                "label": "一般的無線路由器或 IP 分享器只能擔任 DHCP 伺服器，不能擔任用戶端",
                "value": "A"
            },
            {
                "label": "DHCP 內部使用的 IP 範圍均為 192.168.1.0/24 網段，無法變更",
                "value": "B"
            },
            {
                "label": "DHCP 伺服器提供了 IP 位址、網路遮罩外，並糗提供伺服器自己的 IP 位址擔任預設閘道工作",
                "value": "C"
            },
            {
                "label": "DHCP 伺服器之 IP 租用期限固定為 24 小時",
                "value": "D"
            }
        ],
        "answer": ["C"]
    },
    {
        "id": "2-52",
        "type": "single",
        "question": "當封包由無線路由器或 IP 分享器傳往網際網路時，NAT 會更改該封包的哪一個欄位資料？",
        "options": [
            {
                "label": "來源 IP",
                "value": "A"
            },
            {
                "label": "目的 IP",
                "value": "B"
            },
            {
                "label": "通訊協定",
                "value": "C"
            },
            {
                "label": "標頭版本",
                "value": "D"
            }
        ],
        "answer": ["A"]
    },
    {
        "id": "2-53",
        "type": "single",
        "question": "如附圖所示，在網路連線資料中，若電腦 A 與電腦 B 能彼此正常通訊，則設備 C 為下列哪一種裝置？",
        "media": {
            "type": "table",
            "data": [
                [["<map><img src=\"images/2-53.png\" alt=\"題目 2-53 圖片\"></map>"]]
            ]
        },
        "options": [
            {
                "label": "防火牆（Firewall）",
                "value": "A"
            },
            {
                "label": "交換器（Switch）",
                "value": "B"
            },
            {
                "label": "路由器（Router）",
                "value": "C"
            },
            {
                "label": "集線器（HUB）",
                "value": "D"
            }
        ],
        "answer": ["C"]
    },
    {
        "id": "2-54",
        "type": "single",
        "question": "關於預設閘道的敘述，下列哪一項是錯誤？",
        "options": [
            {
                "label": "路由器單一介面下所連接的電腦設備，通常使用相同的預設閘道位址",
                "value": "A"
            },
            {
                "label": "家用無線路由器或 IP 分享器，亦提供預設閘道服務給所連接的 ISP",
                "value": "B"
            },
            {
                "label": "路由器介面與其所連接的電腦設備介面，通常使用相同的網路遮罩",
                "value": "C"
            },
            {
                "label": "家用無線路由器或 IP 分享器可以透過 DHCP 服務指定用戶端的預設閘道位址",
                "value": "D"
            }
        ],
        "answer": ["B"]
    },
    {
        "id": "2-55",
        "type": "single",
        "question": "下列哪一項是 IPv6 位址表示法？",
        "options": [
            {
                "label": "2001.0db8.acad.0001.2302.0000.0000.0001",
                "value": "A"
            },
            {
                "label": "2001:0db8:acad:0001:2302:0000:0000:0001",
                "value": "B"
            },
            {
                "label": "2001-0db8-acad-0001-2302-0000-0000-0001",
                "value": "C"
            },
            {
                "label": "2001,0db8,acad,0001,2302,0000,0000,0001",
                "value": "D"
            }
        ],
        "answer": ["B"]
    },
    {
        "id": "2-56",
        "type": "single",
        "question": "共用單一公用位址的無線路由器或 IP 分享器，若收到來自網際網路的封包，需要哪一個欄位資訊才能判別該轉換成哪一個內部 IP 位址？",
        "options": [
            {
                "label": "傳輸層 Port 編號",
                "value": "A"
            },
            {
                "label": "交換器介面 Port 編號",
                "value": "B"
            },
            {
                "label": "封包傳輸時間",
                "value": "C"
            },
            {
                "label": "封包 ID 編號",
                "value": "D"
            }
        ],
        "answer": ["A"]
    },
    {
        "id": "2-57",
        "type": "single",
        "question": "IPv6 位址表示方式中，用冒號區隔的每一個欄位共有多少位元？",
        "options": [
            {
                "label": "8",
                "value": "A"
            },
            {
                "label": "16",
                "value": "B"
            },
            {
                "label": "24",
                "value": "C"
            },
            {
                "label": "32",
                "value": "D"
            }
        ],
        "answer": ["B"]
    },
    {
        "id": "2-58",
        "type": "single",
        "question": "關於位址轉換 NAT 技術的敘述，下列哪一項正確？",
        "options": [
            {
                "label": "NAT 設備內兩部使用私有 IP 位址的主機，仍須透過 NAT 轉換才能互通",
                "value": "A"
            },
            {
                "label": "多少部主機連接在 NAT 設備內部，就至少需要準備多少個合法的公用 IP 位址，才足夠轉換",
                "value": "B"
            },
            {
                "label": "NAT 設備內部使用的私有 IP 位址不能在網際網路上繞送，因此需要透過 NAT 轉換位址",
                "value": "C"
            },
            {
                "label": "IPv4 位址不需要 NAT 技術，只有 IPv6 才需要",
                "value": "D"
            }
        ],
        "answer": ["C"]
    },
    {
        "id": "2-59",
        "type": "single",
        "question": "IPv4 及 IPv6 位址分別有多少個位元組？",
        "options": [
            {
                "label": "4 及 16",
                "value": "A"
            },
            {
                "label": "4 及 32",
                "value": "B"
            },
            {
                "label": "32 及 64",
                "value": "C"
            },
            {
                "label": "32 及 128",
                "value": "D"
            }
        ],
        "answer": ["A"]
    },
    {
        "id": "2-60",
        "type": "single",
        "question": "IPv4 及 IPv6 標準，是由下列哪一個單位所制訂的？",
        "options": [
            {
                "label": "電機電子工程師學會（IEEE）",
                "value": "A"
            },
            {
                "label": "網際網路研究專門工作組（IRTF）",
                "value": "B"
            },
            {
                "label": "網際網路工程任務小組（IETF）",
                "value": "C"
            },
            {
                "label": "網際網路號碼分配權威機構（IANA）",
                "value": "D"
            }
        ],
        "answer": ["C"]
    },
    {
        "id": "2-61",
        "type": "single",
        "question": "有了 IPv6 位址，為何人們仍然繼續使用 IPv4 位址，下列敘述哪一項正確？",
        "options": [
            {
                "label": "IPv4 位址多達 42 億個，離配置用盡還需要非常久的時間",
                "value": "A"
            },
            {
                "label": "IPv6 位址太長了，轉成點分隔十進制很難記億與使用",
                "value": "B"
            },
            {
                "label": "透過 RFC1918 私有 IP 及 NAT 技術，IPv4 位址消耗獲得減緩",
                "value": "C"
            },
            {
                "label": "IPv6 目前還只是研發階段，尚未有產品支援 IPv6",
                "value": "D"
            }
        ],
        "answer": ["C"]
    },
    {
        "id": "2-62",
        "type": "single",
        "question": "隨著上網設備急速增加，IPv4 位址逐漸耗盡，因此 IETF 推出了下列哪一個新的 IP 位址技術？",
        "options": [
            {
                "label": "IPv5",
                "value": "A"
            },
            {
                "label": "IPv6",
                "value": "B"
            },
            {
                "label": "IPv7",
                "value": "C"
            },
            {
                "label": "IPv8",
                "value": "D"
            }
        ],
        "answer": ["B"]
    },
    {
        "id": "2-63",
        "type": "single",
        "question": "如附圖所示，為無線路由器或 IP 分享器設定，當電腦透過 DHCP 取得的 IP 位址為 192.168.0.121 並傳輸封包進入網際網路時，網際網路裡看到的來源 IP 位址，下列哪一個正確？",
        "media": {
            "type": "table",
            "data": [
                [["<map><img src=\"images/2-63.png\" alt=\"題目 2-63 圖片\"></map>"]]
            ]
        },
        "options": [
            {
                "label": "192.168.0.1",
                "value": "A"
            },
            {
                "label": "192.168.0.121",
                "value": "B"
            },
            {
                "label": "199.6.13.121",
                "value": "C"
            },
            {
                "label": "199.6.13.1",
                "value": "D"
            }
        ],
        "answer": ["C"]
    },
    {
        "id": "2-64",
        "type": "multiple",
        "question": "關於 IPv6 表示法的雙冒號「::」用法，下列敘述哪些正確？（複選）",
        "options": [
            {
                "label": "雙冒號只能使用一次",
                "value": "A"
            },
            {
                "label": "雙冒號用來取代多個連續為 0 的位址區塊",
                "value": "B"
            },
            {
                "label": "雙冒號不能出現在位址最前面",
                "value": "C"
            },
            {
                "label": "雙冒號不能出現在位址最後面",
                "value": "D"
            }
        ],
        "answer": ["A", "B"]
    },
    {
        "id": "2-65",
        "type": "single",
        "question": "關於 IPv4 與 IPv6 位址的敘述，下列哪一項錯誤？",
        "options": [
            {
                "label": "IPv4 位址與 IPv6 位址不能並存，因此目前全球仍繼續使用 IPv4 位址",
                "value": "A"
            },
            {
                "label": "IPv6 位址因為位址足夠，可以免除網路位址轉換 NAT 的需求",
                "value": "B"
            },
            {
                "label": "利用自動設定 IP 位址技術，IPv6 可以簡化管理工作",
                "value": "C"
            },
            {
                "label": "IPv6 位址數量達 340 澗（10 的 36 次方）",
                "value": "D"
            }
        ],
        "answer": ["A"]
    },
    {
        "id": "2-66",
        "type": "single",
        "question": "IPv6 具有多種自動取得位址的選項，該採用下列哪一種選項是根據網路設備發出的哪個訊息內容決定？",
        "options": [
            {
                "label": "鄰居請求（Neighbor Solicitation）",
                "value": "A"
            },
            {
                "label": "鄰居通告（Neighbor Advertisement）",
                "value": "B"
            },
            {
                "label": "路由器請求（Router Solicitation）",
                "value": "C"
            },
            {
                "label": "路由器通告（Router Advertisement）",
                "value": "D"
            }
        ],
        "answer": ["D"]
    },
    {
        "id": "2-67",
        "type": "multiple",
        "question": "IPv6 位址除了將位元數由 IPv4 的 32 位元增加到 128 位元外，還具有下列哪些特性？（複選）",
        "options": [
            {
                "label": "位址表示方法改為冒號區隔十六進位寫法",
                "value": "A"
            },
            {
                "label": "封包標頭長度增加四倍",
                "value": "B"
            },
            {
                "label": "更有效率（Efficiency），並且能夠支援移動性（Mobility）",
                "value": "C"
            },
            {
                "label": "僅位址位元數增加，標頭內容及欄位不變以便能與 IPv4 相容",
                "value": "D"
            }
        ],
        "answer": ["A", "C"]
    },
    {
        "id": "2-68",
        "type": "single",
        "question": "IPv6 位址表示法中，單一 IPv6 位址最多會有多少個 16 進位的字元？",
        "options": [
            {
                "label": "16",
                "value": "A"
            },
            {
                "label": "24",
                "value": "B"
            },
            {
                "label": "32",
                "value": "C"
            },
            {
                "label": "64",
                "value": "D"
            }
        ],
        "answer": ["C"]
    },
    {
        "id": "2-69",
        "type": "multiple",
        "question": "IPv6 位址 2001:0DB8:0000:0000:00FF:0000:0000:00D1 可以改寫為下列哪一些位址寫法？（複選）",
        "options": [
            {
                "label": "2001:DB8::FF:0:0:D1",
                "value": "A"
            },
            {
                "label": "2001:DB8:FF::D1",
                "value": "B"
            },
            {
                "label": "2001:DB8::FF::D1",
                "value": "C"
            },
            {
                "label": "2001:DB8:0:0:FF::D1",
                "value": "D"
            }
        ],
        "answer": ["A", "D"]
    },
    {
        "id": "2-70",
        "type": "multiple",
        "question": "IPv6 支援的位址，自動取得機制包含下列哪些？（複選）",
        "options": [
            {
                "label": "SLAAC",
                "value": "A"
            },
            {
                "label": "DHCP6",
                "value": "B"
            },
            {
                "label": "SLAAC + DHCP6",
                "value": "C"
            },
            {
                "label": "ICMPv6",
                "value": "D"
            }
        ],
        "answer": ["A", "B", "C"]
    },
    {
        "id": "3-01",
        "type": "single",
        "question": "若要向網站請求網頁內容，下列哪一項協定正確？",
        "options": [
            {
                "label": "DHCP",
                "value": "A"
            },
            {
                "label": "HTTP",
                "value": "B"
            },
            {
                "label": "VoIP",
                "value": "C"
            },
            {
                "label": "SMIP",
                "value": "D"
            }
        ],
        "answer": ["B"]
    },
    {
        "id": "3-02",
        "type": "single",
        "question": "當管理者想登入遠方主機進行命令列操控，如同登入本地主機一般時，會採用下列哪一項服務？",
        "options": [
            {
                "label": "SNMP",
                "value": "A"
            },
            {
                "label": "HTML",
                "value": "B"
            },
            {
                "label": "SSH",
                "value": "C"
            },
            {
                "label": "SMTP",
                "value": "D"
            }
        ],
        "answer": ["C"]
    },
    {
        "id": "3-03",
        "type": "single",
        "question": "下列哪一項協定的伺服器，可以分發 IP 位址、遮罩、預設閘道及其他上網參數給客戶端電腦？",
        "options": [
            {
                "label": "DHCP",
                "value": "A"
            },
            {
                "label": "POP",
                "value": "B"
            },
            {
                "label": "FTP",
                "value": "C"
            },
            {
                "label": "SMTP",
                "value": "D"
            }
        ],
        "answer": ["A"]
    },
    {
        "id": "3-04",
        "type": "single",
        "question": "郵件主機和郵件主機之間傳遞信件時使用的協定，下列哪一項正確？",
        "options": [
            {
                "label": "POP",
                "value": "A"
            },
            {
                "label": "HTTP",
                "value": "B"
            },
            {
                "label": "SMTP",
                "value": "C"
            },
            {
                "label": "IMAP",
                "value": "D"
            }
        ],
        "answer": ["C"]
    },
    {
        "id": "3-05",
        "type": "multiple",
        "question": "用於擷取伺服器電子郵件到客戶端主機的協定，下列哪些正確？（複選）",
        "options": [
            {
                "label": "SMTP",
                "value": "A"
            },
            {
                "label": "IMAP",
                "value": "B"
            },
            {
                "label": "HTML",
                "value": "C"
            },
            {
                "label": "POP",
                "value": "D"
            }
        ],
        "answer": ["B", "D"]
    },
    {
        "id": "3-06",
        "type": "multiple",
        "question": "到線上購物網站，會用到下列哪些網際網路服務？（複選）",
        "options": [
            {
                "label": "SSH",
                "value": "A"
            },
            {
                "label": "HTTP",
                "value": "B"
            },
            {
                "label": "FTP",
                "value": "C"
            },
            {
                "label": "DNS",
                "value": "D"
            }
        ],
        "answer": ["B", "D"]
    },
    {
        "id": "3-07",
        "type": "single",
        "question": "網際網路常見的網路層協定，下列哪一項正確？",
        "options": [
            {
                "label": "TCP",
                "value": "A"
            },
            {
                "label": "UDP",
                "value": "B"
            },
            {
                "label": "IP",
                "value": "C"
            },
            {
                "label": "HTTP",
                "value": "D"
            }
        ],
        "answer": ["C"]
    },
    {
        "id": "3-08",
        "type": "multiple",
        "question": "關於 TCP 協定的敘述，下列哪些錯誤？（複選）",
        "options": [
            {
                "label": "使用回覆封包確認傳達",
                "value": "A"
            },
            {
                "label": "不再重送丟失的封包",
                "value": "B"
            },
            {
                "label": "適用於網頁內容之傳輸",
                "value": "C"
            },
            {
                "label": "適用於語言串流之傳輸",
                "value": "D"
            }
        ],
        "answer": ["B", "D"]
    },
    {
        "id": "3-09",
        "type": "multiple",
        "question": "瀏覽器請求網頁的過程，會用到下列哪些協定？（複選）",
        "options": [
            {
                "label": "HTTP",
                "value": "A"
            },
            {
                "label": "TCP",
                "value": "B"
            },
            {
                "label": "UDP",
                "value": "C"
            },
            {
                "label": "IP",
                "value": "D"
            }
        ],
        "answer": ["A", "B", "D"]
    },
    {
        "id": "3-10",
        "type": "single",
        "question": "DNS 查詢主機 IP 的過程採用 UDP 協定的主因，下列哪一項正確？",
        "options": [
            {
                "label": "查詢過程封包丟失也沒關係",
                "value": "A"
            },
            {
                "label": "查詢過程封包可走不同路徑",
                "value": "B"
            },
            {
                "label": "查詢內容用一個封包就裝得下",
                "value": "C"
            },
            {
                "label": "查詢內容不需講究可靠傳輸",
                "value": "D"
            }
        ],
        "answer": ["C"]
    },
    {
        "id": "3-11",
        "type": "single",
        "question": "關於傳輸層的資料傳輸單位，下列哪一項正確？",
        "options": [
            {
                "label": "對話（Session）",
                "value": "A"
            },
            {
                "label": "分段（Segment）",
                "value": "B"
            },
            {
                "label": "封包（Packet）",
                "value": "C"
            },
            {
                "label": "訊框（Frame）",
                "value": "D"
            }
        ],
        "answer": ["B"]
    },
    {
        "id": "3-12",
        "type": "single",
        "question": "關於傳輸層公認連接埠（well-known port）的號碼範圍，下列哪一項正確？",
        "options": [
            {
                "label": "0 ~ 1023",
                "value": "A"
            },
            {
                "label": "1 ~ 1024",
                "value": "B"
            },
            {
                "label": "1 ~ 1023",
                "value": "C"
            },
            {
                "label": "0 ~ 1024",
                "value": "D"
            }
        ],
        "answer": ["A"]
    },
    {
        "id": "3-13",
        "type": "multiple",
        "question": "關於註冊連接埠（Registered Port）的敘述，下列哪些正確？（複選）",
        "options": [
            {
                "label": "號碼範圍介於 1024 ~ 49151",
                "value": "A"
            },
            {
                "label": "號碼範圍介於 1 ~ 1023",
                "value": "B"
            },
            {
                "label": "可當成來源埠使用",
                "value": "C"
            },
            {
                "label": "使用在一般常見的 Service 功能，如 HTTP、FTP",
                "value": "D"
            }
        ],
        "answer": ["A", "C"]
    },
    {
        "id": "3-14",
        "type": "multiple",
        "question": "關於私有連接埠（Private Port）的敘述，下列哪些正確？（複選）",
        "options": [
            {
                "label": "號碼範圍介於 1024 ~ 65535",
                "value": "A"
            },
            {
                "label": "號碼範圍介於 49152 ~ 65535",
                "value": "B"
            },
            {
                "label": "常當成來源埠使用",
                "value": "C"
            },
            {
                "label": "常當成目的地埠使用",
                "value": "D"
            }
        ],
        "answer": ["B", "C"]
    },
    {
        "id": "3-15",
        "type": "single",
        "question": "若要查詢網站的 IP 位址或網域名稱供主機連線之用，下列哪一項服務正確？",
        "options": [
            {
                "label": "DHCP",
                "value": "A"
            },
            {
                "label": "DNS",
                "value": "B"
            },
            {
                "label": "SSH",
                "value": "C"
            },
            {
                "label": "SMTP",
                "value": "D"
            }
        ],
        "answer": ["B"]
    },
    {
        "id": "3-16",
        "type": "single",
        "question": "下列哪一項是 DNS 服務的公認連接埠號？",
        "options": [
            {
                "label": "21",
                "value": "A"
            },
            {
                "label": "22",
                "value": "B"
            },
            {
                "label": "53",
                "value": "C"
            },
            {
                "label": "110",
                "value": "D"
            }
        ],
        "answer": ["C"]
    },
    {
        "id": "3-17",
        "type": "single",
        "question": "關於 DNS 服務的敘述，下列哪一項錯誤？",
        "options": [
            {
                "label": "DNS 名稱有分階層",
                "value": "A"
            },
            {
                "label": "常見的高層網域名稱有 .com、.edu、.net",
                "value": "B"
            },
            {
                "label": "DNS 利用網域名稱代替 IP 住址方便記憶",
                "value": "C"
            },
            {
                "label": "一個 IP 只能有一個 DNS 名稱",
                "value": "D"
            }
        ],
        "answer": ["D"]
    },
    {
        "id": "3-18",
        "type": "single",
        "question": "若要讓用戶不記 IP，只需要填寫 www.tqc.org.tw 即可連上電腦技能基金會網站，下列哪一種協定正確？",
        "options": [
            {
                "label": "ARP",
                "value": "A"
            },
            {
                "label": "DNS",
                "value": "B"
            },
            {
                "label": "HTTP",
                "value": "C"
            },
            {
                "label": "HTML",
                "value": "D"
            }
        ],
        "answer": ["B"]
    },
    {
        "id": "3-19",
        "type": "single",
        "question": "關於 DNS 伺服器如何答覆一般 IP 詢問的敘述，下列哪一項錯誤？",
        "options": [
            {
                "label": "伺服器內部有網域名稱及其 IP 的對照表供查詢之用",
                "value": "A"
            },
            {
                "label": "伺服器若內建對照表查詢不到可代向網域其他伺服器查詢",
                "value": "B"
            },
            {
                "label": "伺服器使用 TCP 傳輸層的 53 號連接埠接受請求",
                "value": "C"
            },
            {
                "label": "伺服器使用 UDP 傳輸層的 53 號連接埠接受請求",
                "value": "D"
            }
        ],
        "answer": ["C"]
    },
    {
        "id": "3-20",
        "type": "single",
        "question": "請求網頁會用到的應用層協定，下列哪一項正確？",
        "options": [
            {
                "label": "HTTP",
                "value": "A"
            },
            {
                "label": "HTML",
                "value": "B"
            },
            {
                "label": "TCP",
                "value": "C"
            },
            {
                "label": "IP",
                "value": "D"
            }
        ],
        "answer": ["A"]
    },
    {
        "id": "3-21",
        "type": "single",
        "question": "安全的 HTTP 連線採用的公認連接埠號碼，下列哪一項正確？",
        "options": [
            {
                "label": "25",
                "value": "A"
            },
            {
                "label": "80",
                "value": "B"
            },
            {
                "label": "110",
                "value": "C"
            },
            {
                "label": "443",
                "value": "D"
            }
        ],
        "answer": ["D"]
    },
    {
        "id": "3-22",
        "type": "single",
        "question": "若瀏覽器同時對一個網站開啟兩個網頁，下列敘述哪一項錯誤？",
        "options": [
            {
                "label": "瀏覽器將開啟兩條 HTTP 連線，連向同一個網站",
                "value": "A"
            },
            {
                "label": "兩條 HTTP 連線的來源 IP 及目的地 IP 相同",
                "value": "B"
            },
            {
                "label": "兩條 HTTP 連線的來源埠相同",
                "value": "C"
            },
            {
                "label": "兩條 HTTP 連線的目的地埠相同",
                "value": "D"
            }
        ],
        "answer": ["C"]
    },
    {
        "id": "3-23",
        "type": "single",
        "question": "關於 HTTP 及 HTML 的敘述，下列哪一項錯誤？",
        "options": [
            {
                "label": "瀏覽網頁同時會用到 HTTP 及 HTML",
                "value": "A"
            },
            {
                "label": "HTTP 為傳輸層協定，負責網頁如何傳送",
                "value": "B"
            },
            {
                "label": "HTML 為網頁內容標準，負責網頁如何呈現",
                "value": "C"
            },
            {
                "label": "HTTP 以明文傳送，必須使用 HTTPS 才會以密文傳送",
                "value": "D"
            }
        ],
        "answer": ["B"]
    },
    {
        "id": "3-24",
        "type": "single",
        "question": "除了HTTP 之外，常用的檔案傳輸協定還有下列哪一項？",
        "options": [
            {
                "label": "TCP",
                "value": "A"
            },
            {
                "label": "FTP",
                "value": "B"
            },
            {
                "label": "DNS",
                "value": "C"
            },
            {
                "label": "SSH",
                "value": "D"
            }
        ],
        "answer": ["B"]
    },
    {
        "id": "3-25",
        "type": "single",
        "question": "關於 FTP 的敘述，下列哪一項錯誤？",
        "options": [
            {
                "label": "FTP 伺服器利用連接埠 21 號進行檔案管理及傳輸",
                "value": "A"
            },
            {
                "label": "FTP 伺服器允許檔案的上傳、下載、刪除、更名操作",
                "value": "B"
            },
            {
                "label": "FTP 客戶端功能常內建於作業系統及瀏覽器",
                "value": "C"
            },
            {
                "label": "獨立 FTP 客戶端軟體常用圖形界面方便檔案拖拉操作",
                "value": "D"
            }
        ],
        "answer": ["A"]
    },
    {
        "id": "3-26",
        "type": "multiple",
        "question": "下列哪些是 FTP 伺服器使用公認的連接埠號碼？（複選）",
        "options": [
            {
                "label": "20",
                "value": "A"
            },
            {
                "label": "21",
                "value": "B"
            },
            {
                "label": "23",
                "value": "C"
            },
            {
                "label": "25",
                "value": "D"
            }
        ],
        "answer": ["A", "B"]
    },
    {
        "id": "3-27",
        "type": "single",
        "question": "關於 FTP 連線過程，下列哪一項錯誤？",
        "options": [
            {
                "label": "FTP 客戶端和伺服器端之間利用控制連線傳送檔案操錯指令",
                "value": "A"
            },
            {
                "label": "FTP 客戶端和伺服器端之間利用資料連線傳送檔案內容",
                "value": "B"
            },
            {
                "label": "控制連線用到伺服主機的 21 號埠",
                "value": "C"
            },
            {
                "label": "資料連線用到伺服主機的 22 號埠",
                "value": "D"
            }
        ],
        "answer": ["D"]
    },
    {
        "id": "3-28",
        "type": "single",
        "question": "下列哪一項是 TELNET 使用公認的 TCP 埠號？",
        "options": [
            {
                "label": "23",
                "value": "A"
            },
            {
                "label": "22",
                "value": "B"
            },
            {
                "label": "21",
                "value": "C"
            },
            {
                "label": "20",
                "value": "D"
            }
        ],
        "answer": ["A"]
    },
    {
        "id": "3-29",
        "type": "single",
        "question": "下列哪一項是 SSH 連線使用公認的 TCP 埠號？",
        "options": [
            {
                "label": "23",
                "value": "A"
            },
            {
                "label": "22",
                "value": "B"
            },
            {
                "label": "21",
                "value": "C"
            },
            {
                "label": "20",
                "value": "D"
            }
        ],
        "answer": ["B"]
    },
    {
        "id": "3-30",
        "type": "multiple",
        "question": "支援虛擬終端機連線並允許使用遠方主機命令列介面的協定，下列哪些正確？（複選）",
        "options": [
            {
                "label": "HTTP",
                "value": "A"
            },
            {
                "label": "RDP",
                "value": "B"
            },
            {
                "label": "SSH",
                "value": "C"
            },
            {
                "label": "TELNET",
                "value": "D"
            }
        ],
        "answer": ["C", "D"]
    },
    {
        "id": "3-31",
        "type": "single",
        "question": "下列哪一項不是虛擬終端機（VTY）連線的好處？",
        "options": [
            {
                "label": "對遠方主機下命令列指令就像在本地主機一般",
                "value": "A"
            },
            {
                "label": "若取得授權可以啟動或關閉遠方服務",
                "value": "B"
            },
            {
                "label": "若取得授權可以修改遠方主機組態，甚至關閉遠方主機",
                "value": "C"
            },
            {
                "label": "除了使用文字模式也可以使用圖形模式存取遠方主機",
                "value": "D"
            }
        ],
        "answer": ["D"]
    },
    {
        "id": "3-32",
        "type": "multiple",
        "question": "現在 TELNET 逐漸由 SSH 取代的原因，下列哪些正確？（複選）",
        "options": [
            {
                "label": "TELNET 只能傳輸文字，SSH 可以傳輸圖形",
                "value": "A"
            },
            {
                "label": "TELNET 採用明文傳輸，SSH 採用密文傳輸",
                "value": "B"
            },
            {
                "label": "SSH 的帳密驗證能力強於 TELNET",
                "value": "C"
            },
            {
                "label": "SSH 的傳輸速度優於 TELNET",
                "value": "D"
            }
        ],
        "answer": ["B", "C"]
    },
    {
        "id": "3-33",
        "type": "single",
        "question": "電子郵件寄送採用 SMTP 協定，其公認的 TCP 連接埠下列哪一項正確？",
        "options": [
            {
                "label": "22",
                "value": "A"
            },
            {
                "label": "25",
                "value": "B"
            },
            {
                "label": "110",
                "value": "C"
            },
            {
                "label": "143",
                "value": "D"
            }
        ],
        "answer": ["B"]
    },
    {
        "id": "3-34",
        "type": "single",
        "question": "關於 POP 及 IMAP 兩項服務的敘述，下列哪一項錯誤？",
        "options": [
            {
                "label": "兩者皆用於擷取伺服器電子郵件到客戶端主機",
                "value": "A"
            },
            {
                "label": "POP 預設伺服器郵件遭下載後，原郵件就不再保留",
                "value": "B"
            },
            {
                "label": "IMAP 一直保留伺服器郵件，除非用戶想刪除",
                "value": "C"
            },
            {
                "label": "同一台伺服器不能同時提供 POP 及 IMAP 兩種服務",
                "value": "D"
            }
        ],
        "answer": ["D"]
    },
    {
        "id": "3-35",
        "type": "single",
        "question": "關於網路電話的敘述，下列哪一項錯誤？",
        "options": [
            {
                "label": "使用 VoIP 技術將聲音轉成數位資料放在網路傳輸",
                "value": "A"
            },
            {
                "label": "網路電話和即時訊息服務一樣接採用同儕對同儕技術",
                "value": "B"
            },
            {
                "label": "網路電話撥到普通電話須要經由閘道器連到公共交換電話網（PSTH）",
                "value": "C"
            },
            {
                "label": "所有網路電話軟體接使用同一套協定及目的地埠號互通",
                "value": "D"
            }
        ],
        "answer": ["D"]
    },
    {
        "id": "3-36",
        "type": "multiple",
        "question": "關於 Wi-Fi 無線區網標準 IEEE 802.11 用到的電波頻帶，下列哪些正確？（複選）",
        "options": [
            {
                "label": "840 MHz",
                "value": "A"
            },
            {
                "label": "930 MHz",
                "value": "B"
            },
            {
                "label": "2.4 GHz",
                "value": "C"
            },
            {
                "label": "5 GHz",
                "value": "D"
            }
        ],
        "answer": ["C", "D"]
    },
    {
        "id": "3-37",
        "type": "single",
        "question": "提供辨識不同無線路由器的參數設定，下列哪一項正確？",
        "options": [
            {
                "label": "網路模式",
                "value": "A"
            },
            {
                "label": "網路名稱（SSID）",
                "value": "B"
            },
            {
                "label": "標準頻道",
                "value": "C"
            },
            {
                "label": "SSID 廣播",
                "value": "D"
            }
        ],
        "answer": ["B"]
    },
    {
        "id": "3-38",
        "type": "single",
        "question": "為了讓更多的新舊設備可以一起上網，無線路由器的網路模式宜選用下列哪一種模式？",
        "options": [
            {
                "label": "802.11b",
                "value": "A"
            },
            {
                "label": "802.11g",
                "value": "B"
            },
            {
                "label": "802.11n",
                "value": "C"
            },
            {
                "label": "混用模式",
                "value": "D"
            }
        ],
        "answer": ["D"]
    },
    {
        "id": "3-39",
        "type": "single",
        "question": "關閉 SSID 廣播的效果，下列哪一項錯誤？",
        "options": [
            {
                "label": "節省能源",
                "value": "A"
            },
            {
                "label": "讓裝置較難找到無線網路",
                "value": "B"
            },
            {
                "label": "能稍微預防未授權裝置連上無線網路",
                "value": "C"
            },
            {
                "label": "手動輸入 SSID 仍能連上無線網路",
                "value": "D"
            }
        ],
        "answer": ["A"]
    },
    {
        "id": "3-40",
        "type": "single",
        "question": "某無線網路路由器的網路模式只選用 802.11n 的主因，下列哪一項正確？",
        "options": [
            {
                "label": "只使用一種無線標準傳輸速度最快",
                "value": "A"
            },
            {
                "label": "不讓使用其他無線標準的裝置連上無線網路",
                "value": "B"
            },
            {
                "label": "可讓最多種裝置連上無線網路",
                "value": "C"
            },
            {
                "label": "有利於較舊的裝置連上無線網路",
                "value": "D"
            }
        ],
        "answer": ["A"]
    },
    {
        "id": "3-41",
        "type": "single",
        "question": "關於網路名稱（SSID）的敘述，下列哪一項錯誤？",
        "options": [
            {
                "label": "字串不分大小寫",
                "value": "A"
            },
            {
                "label": "允許英數字混合",
                "value": "B"
            },
            {
                "label": "最多 32 字元",
                "value": "C"
            },
            {
                "label": "用來區別自己所屬及可互通的無線網路（WLAN）",
                "value": "D"
            }
        ],
        "answer": ["A"]
    },
    {
        "id": "3-42",
        "type": "single",
        "question": "無線網路（WLAN）使用的媒介存取技術下列哪一項正確？",
        "options": [
            {
                "label": "CSMA/CA",
                "value": "A"
            },
            {
                "label": "CSMA/CB",
                "value": "B"
            },
            {
                "label": "CSMA/CD",
                "value": "C"
            },
            {
                "label": "CSMA/CE",
                "value": "D"
            }
        ],
        "answer": ["A"]
    },
    {
        "id": "3-43",
        "type": "single",
        "question": "無線主機（STA）需要使用網路時，會向存取點（AP）發出下列哪一種訊息？",
        "options": [
            {
                "label": "RTS",
                "value": "A"
            },
            {
                "label": "CTS",
                "value": "B"
            },
            {
                "label": "ACK",
                "value": "C"
            },
            {
                "label": "REQ",
                "value": "D"
            }
        ],
        "answer": ["A"]
    },
    {
        "id": "3-44",
        "type": "single",
        "question": "存取點（AP）同意無線主機（STA）使用網路時，會回覆下列哪一種訊息？",
        "options": [
            {
                "label": "RTS",
                "value": "A"
            },
            {
                "label": "CTS",
                "value": "B"
            },
            {
                "label": "ACK",
                "value": "C"
            },
            {
                "label": "READY",
                "value": "D"
            }
        ],
        "answer": ["B"]
    },
    {
        "id": "3-45",
        "type": "single",
        "question": "無線主機（STA）結束資料傳送後，會送出下列哪一種訊息表示釋放頻道？",
        "options": [
            {
                "label": "RTS",
                "value": "A"
            },
            {
                "label": "CTS",
                "value": "B"
            },
            {
                "label": "ACK",
                "value": "C"
            },
            {
                "label": "FREE",
                "value": "D"
            }
        ],
        "answer": ["C"]
    },
    {
        "id": "3-46",
        "type": "single",
        "question": "關於無線網路（WLAN） 的 CSMA/CA 技術和乙太網路（Ethernet）的 CSMA/CD 技術，下列敘述哪一項錯誤？",
        "options": [
            {
                "label": "兩種技術皆適用於媒介共享，傳輸容易產生碰撞的環境",
                "value": "A"
            },
            {
                "label": "無線網路利用預約頻道機制避免碰撞",
                "value": "B"
            },
            {
                "label": "乙太網路利用遇到碰撞停⽌傳輸一段時間的偵測機制減少碰撞",
                "value": "C"
            },
            {
                "label": "無線網路和乙太網路皆有清楚定義的傳輸邊界範圍",
                "value": "D"
            }
        ],
        "answer": ["D"]
    },
    {
        "id": "3-47",
        "type": "single",
        "question": "關於 CSMA/CA 技術的資料傳輸過程，下列哪一項錯誤？",
        "options": [
            {
                "label": "無線主機（STA）發出 RTS 訊息給存取點（AP），請其轉發訊息通知所有主機頻道淨空以便傳送資料",
                "value": "A"
            },
            {
                "label": "存取點確認頻道淨空後發出 CTS 訊息給所有主機同意傳送資料",
                "value": "B"
            },
            {
                "label": "請求主機收到 CTS 訊息後開始傳送資料",
                "value": "C"
            },
            {
                "label": "請求主機傳完資料後發出 ACK 訊息給存取點，請其轉發訊息通知所有主機頻道已釋放",
                "value": "D"
            }
        ],
        "answer": ["A"]
    },
    {
        "id": "3-48",
        "type": "single",
        "question": "無線路由器連接區域網路主機的接孔，下列哪一項正確？",
        "options": [
            {
                "label": "標記 INTERNET 的 RJ-45 接孔",
                "value": "A"
            },
            {
                "label": "標記 LAN 的 RJ-45 接孔",
                "value": "B"
            },
            {
                "label": "標記 DSL 的 RJ-11 接孔",
                "value": "C"
            },
            {
                "label": "標記 CABLE 的 BNC 接孔",
                "value": "D"
            }
        ],
        "answer": ["B"]
    },
    {
        "id": "3-49",
        "type": "single",
        "question": "經由數據機（Modem）過來的纜線，要連接到下列無線路由器的哪一個接孔？",
        "options": [
            {
                "label": "標記 INTERNET 的 RJ-45 接孔",
                "value": "A"
            },
            {
                "label": "標記 LAN 的 RJ-45 接孔",
                "value": "B"
            },
            {
                "label": "標記 DSL 的 RJ-11 接孔",
                "value": "C"
            },
            {
                "label": "標記 CABLE 的 BNC 接孔",
                "value": "D"
            }
        ],
        "answer": ["A"]
    },
    {
        "id": "3-50",
        "type": "single",
        "question": "關於無線路由器 MAC 過濾功能的敘述，下列哪一項錯誤？",
        "options": [
            {
                "label": "提升無線網路安全又具備容易快速設定之彈性，方便所有人上網",
                "value": "A"
            },
            {
                "label": "只有設定在 MAC 白名單中的無線主機才能順利連線",
                "value": "B"
            },
            {
                "label": "有新主機想連線，必須由管理者手動加入 MAC 白名單中",
                "value": "C"
            },
            {
                "label": "大部分的無線路由器都有支援 MAC 過濾功能",
                "value": "D"
            }
        ],
        "answer": ["A"]
    },
    {
        "id": "3-51",
        "type": "single",
        "question": "關於無線路由器的賓客模式（Guest Mode），下列敘述哪一項錯誤？",
        "options": [
            {
                "label": "不是每一台無線路由器都有支援賓客模式",
                "value": "A"
            },
            {
                "label": "賓客模式一般採用開放式連線不須密碼驗證",
                "value": "B"
            },
            {
                "label": "賓客模式允許連線主機和內部區域網路相連",
                "value": "C"
            },
            {
                "label": "賓客模式允許連線主機和外部網際網路相連",
                "value": "D"
            }
        ],
        "answer": ["C"]
    },
    {
        "id": "3-52",
        "type": "single",
        "question": "下列哪一項不是手機常見的無線連線方式？",
        "options": [
            {
                "label": "Wi-Fi",
                "value": "A"
            },
            {
                "label": "WiMax",
                "value": "B"
            },
            {
                "label": "行動數據",
                "value": "C"
            },
            {
                "label": "藍牙",
                "value": "D"
            }
        ],
        "answer": ["B"]
    },
    {
        "id": "3-53",
        "type": "single",
        "question": "在公共圖書館最省錢又方便的手機上網方式，下列哪一項正確？",
        "options": [
            {
                "label": "Wi-Fi",
                "value": "A"
            },
            {
                "label": "藍牙",
                "value": "B"
            },
            {
                "label": "行動數據",
                "value": "C"
            },
            {
                "label": "連接網路插座",
                "value": "D"
            }
        ],
        "answer": ["A"]
    },
    {
        "id": "3-54",
        "type": "single",
        "question": "關於行動裝置預先設定好的上網方式，下列敘述哪一項錯誤？",
        "options": [
            {
                "label": "如果裝置有開啟 Wi-Fi，則自動優先使用 Wi-Fi 網路",
                "value": "A"
            },
            {
                "label": "如果沒有 Wi-Fi 網路，但有設定方案則自動使用行動數據",
                "value": "B"
            },
            {
                "label": "行動數據從 4G 自動轉換到 3G 的過程原有連線會中斷",
                "value": "C"
            },
            {
                "label": "行動數據有頻寬限制及收費關係只在找不到 Wi-Fi 時才使用",
                "value": "D"
            }
        ],
        "answer": ["C"]
    },
    {
        "id": "3-55",
        "type": "single",
        "question": "關於無線裝置採用藍牙連線的優點，下列哪一項錯誤？",
        "options": [
            {
                "label": "擺脫纜線之糾纏",
                "value": "A"
            },
            {
                "label": "距離躍近，傳輸速率越快",
                "value": "B"
            },
            {
                "label": "省電功能可延長電池壽命",
                "value": "C"
            },
            {
                "label": "可直接對連不需基地台之建置",
                "value": "D"
            }
        ],
        "answer": ["B"]
    },
    {
        "id": "3-56",
        "type": "multiple",
        "question": "藍牙適用下列哪些場合？（複選）",
        "options": [
            {
                "label": "車用喇叭麥克風可供撥打或接收電話",
                "value": "A"
            },
            {
                "label": "上網連線之分享",
                "value": "B"
            },
            {
                "label": "無線鍵盤、滑鼠",
                "value": "C"
            },
            {
                "label": "導遊廣播給全團遊客之講解器",
                "value": "D"
            }
        ],
        "answer": ["A", "B", "C"]
    },
    {
        "id": "3-57",
        "type": "single",
        "question": "關於藍牙配對的敘述，下列哪一項錯誤？",
        "options": [
            {
                "label": "任何時間最多八部裝置可以連線在一起",
                "value": "A"
            },
            {
                "label": "裝置只要一開啟藍牙功能，就可以讓其他裝置找到",
                "value": "B"
            },
            {
                "label": "掃描周邊藍牙裝置過程，可詢問其名稱及提供之服務等訊息",
                "value": "C"
            },
            {
                "label": "第一次點選新藍牙裝置時，需要輸入個人識別碼（PIN）才能連線成功",
                "value": "D"
            }
        ],
        "answer": ["B"]
    },
    {
        "id": "3-58",
        "type": "single",
        "question": "想租用有專人維護的網站空間放自己公司的網頁，可使用下列 ISP 的哪一項服務？",
        "options": [
            {
                "label": "網頁架站（Web Hosting）",
                "value": "A"
            },
            {
                "label": "FTP 架站（FTP Hosting）",
                "value": "B"
            },
            {
                "label": "設備託管（Equipment Colocation）",
                "value": "C"
            },
            {
                "label": "應用及媒體架站（Applications and Media Hosting）",
                "value": "D"
            }
        ],
        "answer": ["A"]
    },
    {
        "id": "3-59",
        "type": "single",
        "question": "想將公司主機放在 ISP 機房充分利用其頻寬，可使用下列 ISP 的哪一項服務？",
        "options": [
            {
                "label": "網頁架站（Web Hosting）",
                "value": "A"
            },
            {
                "label": "FTP 架站（FTP Hosting）",
                "value": "B"
            },
            {
                "label": "設備託管（Equipment Colocation）",
                "value": "C"
            },
            {
                "label": "應用及媒體架站（Applications and Media Hosting）",
                "value": "D"
            }
        ],
        "answer": ["C"]
    },
    {
        "id": "3-60",
        "type": "single",
        "question": "關於 ISP 的敘述，下列哪一項錯誤？",
        "options": [
            {
                "label": "ISP 讓家用網路連上網際網路",
                "value": "A"
            },
            {
                "label": "許多 ISP 還提供電子郵件帳號等附加服務給契約用戶",
                "value": "B"
            },
            {
                "label": "每家 ISP 須連向其他 ISP 形成一個連結網路供各地用戶互連",
                "value": "C"
            },
            {
                "label": "ISP 之間採平層（Flat）架構互連，以確保來源到目的地儘量走最短路徑",
                "value": "D"
            }
        ],
        "answer": ["D"]
    },
    {
        "id": "3-61",
        "type": "single",
        "question": "關於網際網路骨幹的敘述，下列哪一項錯誤？",
        "options": [
            {
                "label": "猶如資訊高速公路提供快速資料傳輸",
                "value": "A"
            },
            {
                "label": "以平層（Flat）架構連結世界各服務供應商的網路",
                "value": "B"
            },
            {
                "label": "主要傳輸媒介採用光纖纜線",
                "value": "C"
            },
            {
                "label": "連結各城市或大陸的光纖纜線常走地底或海底",
                "value": "D"
            }
        ],
        "answer": ["B"]
    },
    {
        "id": "3-62",
        "type": "single",
        "question": "下列哪一種 ISP 沒有獨立自己埋線或架基地台？",
        "options": [
            {
                "label": "本地有線電視供應商",
                "value": "A"
            },
            {
                "label": "有線電話服務供應商",
                "value": "B"
            },
            {
                "label": "智慧手機的蜂巢網路服務供應商",
                "value": "C"
            },
            {
                "label": "租用別家公司實體網路頻寬的獨立供應商",
                "value": "D"
            }
        ],
        "answer": ["D"]
    },
    {
        "id": "3-63",
        "type": "single",
        "question": "家裡網路欲連上 ISP，下列哪一項是安全必須的設備？",
        "options": [
            {
                "label": "數據機",
                "value": "A"
            },
            {
                "label": "路由器",
                "value": "B"
            },
            {
                "label": "交換器",
                "value": "C"
            },
            {
                "label": "集線器",
                "value": "D"
            }
        ],
        "answer": ["B"]
    },
    {
        "id": "3-64",
        "type": "single",
        "question": "家裡電腦欲想連上 ISP，下列哪一項是最基本的設備？",
        "options": [
            {
                "label": "數據機",
                "value": "A"
            },
            {
                "label": "路由器",
                "value": "B"
            },
            {
                "label": "交換器",
                "value": "C"
            },
            {
                "label": "集線器",
                "value": "D"
            }
        ],
        "answer": ["A"]
    },
    {
        "id": "3-65",
        "type": "single",
        "question": "如家裡同時須要桌機及行動裝置上網，採購下列哪一項單一設備最划算？",
        "options": [
            {
                "label": "交換器",
                "value": "A"
            },
            {
                "label": "無線整合型路由器",
                "value": "B"
            },
            {
                "label": "無線訊號延伸器",
                "value": "C"
            },
            {
                "label": "集線器",
                "value": "D"
            }
        ],
        "answer": ["B"]
    },
    {
        "id": "3-66",
        "type": "multiple",
        "question": "如果數據機或路由器提供的有線埠數不夠，則利用下列哪些設備能簡單增加有線埠數？（複選）",
        "options": [
            {
                "label": "IP 分享器",
                "value": "A"
            },
            {
                "label": "路由器",
                "value": "B"
            },
            {
                "label": "交換器",
                "value": "C"
            },
            {
                "label": "集線器",
                "value": "D"
            }
        ],
        "answer": ["C", "D"]
    },
    {
        "id": "3-67",
        "type": "single",
        "question": "關於整合型無線路由器的特徵，下列哪一項錯誤？",
        "options": [
            {
                "label": "可同時提供有線及無線裝置連網",
                "value": "A"
            },
            {
                "label": "有線及無線裝置一般分處兩個不同的網段",
                "value": "B"
            },
            {
                "label": "可提供 DHCP 功能自動分發 IP 等上網參數",
                "value": "C"
            },
            {
                "label": "一般允許內部網路對外連線，但不允許外部網路對內連線",
                "value": "D"
            }
        ],
        "answer": ["B"]
    },
    {
        "id": "3-68",
        "type": "single",
        "question": "關於從家裡電腦直接撥接數據機對外上網的敘述，下列哪一項錯誤？",
        "options": [
            {
                "label": "直接利用數據機撥接取得的電腦網址為公有 IP",
                "value": "A"
            },
            {
                "label": "直接連數據機容易讓電腦受到外部攻擊",
                "value": "B"
            },
            {
                "label": "外部網路可直接連線到家裡電腦",
                "value": "C"
            },
            {
                "label": "遇電腦想當服器供外部網路使用之場合此為最佳作法",
                "value": "D"
            }
        ],
        "answer": ["D"]
    },
    {
        "id": "3-69",
        "type": "multiple",
        "question": "從家裡電腦連上網際網路過程，若寫下訊號沿途經過的設備路徑，則下列哪些不安全？（複選）",
        "options": [
            {
                "label": "交換器、路由器、數據機",
                "value": "A"
            },
            {
                "label": "路由器、數據機",
                "value": "B"
            },
            {
                "label": "交換器、數據機",
                "value": "C"
            },
            {
                "label": "數據機",
                "value": "D"
            }
        ],
        "answer": ["C", "D"]
    },
    {
        "id": "3-70",
        "type": "single",
        "question": "家中主機上網建議透過整合型無線路由器的理由，下列哪一項錯誤？",
        "options": [
            {
                "label": "主機取得的是私有 IP",
                "value": "A"
            },
            {
                "label": "主機不會受到外部攻擊",
                "value": "B"
            },
            {
                "label": "家中伺服器可由內部有線和無線主機一起存取",
                "value": "C"
            },
            {
                "label": "家中伺服器將因無法提供外部網路使用而獲得保護",
                "value": "D"
            }
        ],
        "answer": ["D"]
    },
    {
        "id": "4-01",
        "type": "single",
        "question": "駭客通常是指擅長某領域程式語言的程式專家，其中一類駭客是以改善為目標，破解某個程式並加以改善、增強該程式的功能或修補該程式的漏洞，這屬於下列哪一類的駭客？",
        "options": [
            {
                "label": "灰帽駭客",
                "value": "A"
            },
            {
                "label": "白帽駭客",
                "value": "B"
            },
            {
                "label": "藍帽駭客",
                "value": "C"
            },
            {
                "label": "黑帽駭客",
                "value": "D"
            }
        ],
        "answer": ["B"]
    },
    {
        "id": "4-02",
        "type": "single",
        "question": "駭客通常是指擅長某領域程式語言的程式專家，其中一類客是以利慾為目標，透過破解或入侵來獲取不法利益或者發洩負面情緒，這屬於下列哪一類的駭客？",
        "options": [
            {
                "label": "灰帽駭客",
                "value": "A"
            },
            {
                "label": "白帽駭客",
                "value": "B"
            },
            {
                "label": "藍帽駭客",
                "value": "C"
            },
            {
                "label": "黑帽駭客",
                "value": "D"
            }
        ],
        "answer": ["D"]
    },
    {
        "id": "4-03",
        "type": "single",
        "question": "下列哪一項是電腦蠕蟲傳播的管道或方式？",
        "options": [
            {
                "label": "SQL 攻擊（SQL Injection）",
                "value": "A"
            },
            {
                "label": "跨站腳本（Cross Site Scripting, XSS）",
                "value": "B"
            },
            {
                "label": "緩衝區溢位（Buffer Overflow）",
                "value": "C"
            },
            {
                "label": "跨站請求偽造（Cross Site Request Forgery, CSRF）",
                "value": "D"
            }
        ],
        "answer": ["C"]
    },
    {
        "id": "4-04",
        "type": "single",
        "question": "惡意程式就感染的途徑與目的可分成不同類別，有⼀類惡意程式會偽裝成有用的軟體引誘使用者去安装，安裝後通常會在被感染的電腦開⼀道後門，讓遠端的駭客可以遙控這部電腦，下列哪⼀項正確？",
        "options": [
            {
                "label": "病毒程式（Virus）",
                "value": "A"
            },
            {
                "label": "木馬程式（Trojan Horse）",
                "value": "B"
            },
            {
                "label": "蠕蟲軟體（Worms）",
                "value": "C"
            },
            {
                "label": "恐嚇軟體（Scareware）",
                "value": "D"
            }
        ],
        "answer": ["B"]
    },
    {
        "id": "4-05",
        "type": "single",
        "question": "惡意程式就感染的途徑與目的可分成不同類別，有一類惡意程式不需要依附在其他程式就可以自行複製及傳播，主要是鑽作業系統或是特定網路服務程式的漏洞，下列哪一項正確？",
        "options": [
            {
                "label": "病毒程式（Virus）",
                "value": "A"
            },
            {
                "label": "木馬程式（Trojan Horse）",
                "value": "B"
            },
            {
                "label": "蠕蟲軟體（Worms）",
                "value": "C"
            },
            {
                "label": "殭屍程式（Bot）",
                "value": "D"
            }
        ],
        "answer": ["C"]
    },
    {
        "id": "4-06",
        "type": "single",
        "question": "惡意程式就感染的途徑與目的可分成不同類別，有一類惡意程式是透過執行某個程式或是開啟 Word 或 Excel 等文件來傳播，同時也會感染電腦中的其他執行檔或是前述文件檔，發作後通常會讓電腦運作變慢，下列敘述哪一項正確？",
        "options": [
            {
                "label": "病毒程式（Virus）",
                "value": "A"
            },
            {
                "label": "木馬程式（Trojan Horse）",
                "value": "B"
            },
            {
                "label": "蠕蟲軟體（Worms）",
                "value": "C"
            },
            {
                "label": "殭屍程式（Bot）",
                "value": "D"
            }
        ],
        "answer": ["A"]
    },
    {
        "id": "4-07",
        "type": "single",
        "question": "惡意程式就感染的途徑與目的可分成不同類別，有一類惡意程式可以中央控管許多電腦，任何時候都能用來散發垃圾郵件、進行網路釣魚攻擊或執行阻斷服務（DoS）攻擊，讓網站無法被連上，下列敘述一項正確？",
        "options": [
            {
                "label": "病毒程式（Virus）",
                "value": "A"
            },
            {
                "label": "木馬程式（Trojan Horse）",
                "value": "B"
            },
            {
                "label": "蠕蟲軟體（Worms）",
                "value": "C"
            },
            {
                "label": "殭屍程式（Bot）",
                "value": "D"
            }
        ],
        "answer": ["D"]
    },
    {
        "id": "4-08",
        "type": "single",
        "question": "經常自某個寄件人處收到一些電子郵件，内容也實有趣或有用，日漸習慣開啟該類郵件並信賴該郵件的内容，然而有次收到的郵件中有一個連結，點選後被導向惡意網站，致使電腦被植入病毒或是綁架，這種手法下列哪一項正確？",
        "options": [
            {
                "label": "跨站請求偽造（Cros Site Request Forgery, CSRF）",
                "value": "A"
            },
            {
                "label": "社交工程（Social Engineering）",
                "value": "B"
            },
            {
                "label": "跨站腳本（Cross Site Scripting, XSS）",
                "value": "C"
            },
            {
                "label": "阻斷服務攻撃（Deny of Service, DoS）",
                "value": "D"
            }
        ],
        "answer": ["B"]
    },
    {
        "id": "4-09",
        "type": "single",
        "question": "透過搜尋引擎尋找銀行的網址，並未注意連結的網址，點選進去後進行登入程序，結果第一次登入時系統跳出帳號密碼錯誤訊息，點選「確認」或類似按鈕後，畫面重新導向登入畫面，再次輸入帳號及密碼，這次就能正確登入，但隔幾天銀行帳却被盜用，上述狀況最有可能的原因是下列哪一項？",
        "options": [
            {
                "label": "連結到釣魚網站",
                "value": "A"
            },
            {
                "label": "帳號密碼被側錄",
                "value": "B"
            },
            {
                "label": "跨網站腳本攻擊",
                "value": "C"
            },
            {
                "label": "會期（Session）綁架",
                "value": "D"
            }
        ],
        "answer": ["A"]
    },
    {
        "id": "4-10",
        "type": "single",
        "question": "當攻擊者透過網路通訊協定的漏洞，鎖定特定目標主機，大量重複傳送封包（Packets），企圖讓該主機的系統工作超過其負荷，造成系統癱痪，這種攻擊方式是屬於下列哪一種類型？",
        "options": [
            {
                "label": "溢位（Overflow）攻撃",
                "value": "A"
            },
            {
                "label": "中間人（Man In The Middle）攻撃",
                "value": "B"
            },
            {
                "label": "阻斷服務（Denial Of Services）攻撃",
                "value": "C"
            },
            {
                "label": "釣魚（Phishing）攻撃",
                "value": "D"
            }
        ],
        "answer": ["C"]
    },
    {
        "id": "4-11",
        "type": "single",
        "question": "下列哪一項軟體工具可協助電腦系統管理員，用來隱藏不讓一般使用者看到的檔案，可是也經常被攻擊者利用來取得系統管理員的權限，並對受害的電腦系統植入惡意程式？",
        "options": [
            {
                "label": "根目錄工具包（Rootkits）",
                "value": "A"
            },
            {
                "label": "系統補丁更新（Patch Update）",
                "value": "B"
            },
            {
                "label": "鍵盤側錄（Keylogger）",
                "value": "C"
            },
            {
                "label": "封包過濾（Packet Filter）",
                "value": "D"
            }
        ],
        "answer": ["A"]
    },
    {
        "id": "4-12",
        "type": "single",
        "question": "在通行密碼（Password）的安全威脅中，若攔截使用者的通行密碼，重新輸入到主機系統，以通過系統驗證，這種攻擊法下列哪一項正確？",
        "options": [
            {
                "label": "行騙法（Spoofing）",
                "value": "A"
            },
            {
                "label": "字典攻擊法（Dictionary Attack）",
                "value": "B"
            },
            {
                "label": "猜測攻擊法（Guessing Attack）",
                "value": "C"
            },
            {
                "label": "重送攻撃（Replaying Attack）",
                "value": "D"
            }
        ],
        "answer": ["D"]
    },
    {
        "id": "4-13",
        "type": "single",
        "question": "電腦網路探測工具 Traceroute，是利用下列 ICMP 的哪一類別碼功能來搜尋路徑中的路由器？",
        "options": [
            {
                "label": "ICMP Echo Reply",
                "value": "A"
            },
            {
                "label": "ICMP Echo Request",
                "value": "B"
            },
            {
                "label": "ICMP Time Exceeded",
                "value": "C"
            },
            {
                "label": "ICMP Redirection",
                "value": "D"
            }
        ],
        "answer": ["C"]
    },
    {
        "id": "4-14",
        "type": "single",
        "question": "下列哪一個軟體不能偵測出病毒之存在？",
        "options": [
            {
                "label": "MEM.EXE",
                "value": "A"
            },
            {
                "label": "CHKDSK.EXE",
                "value": "B"
            },
            {
                "label": "DEBUG.COM",
                "value": "C"
            },
            {
                "label": "SCAN.COM",
                "value": "D"
            }
        ],
        "answer": ["B"]
    },
    {
        "id": "4-15",
        "type": "single",
        "question": "下列哪一項並不是預防電腦感染病毒的方法？",
        "options": [
            {
                "label": "對所有可疑檔案加密",
                "value": "A"
            },
            {
                "label": "不開啟來路不明的檔案",
                "value": "B"
            },
            {
                "label": "設定較高的瀏覽器安全等級",
                "value": "C"
            },
            {
                "label": "安裝防毒軟體，並定時或自動更新病毒碼",
                "value": "D"
            }
        ],
        "answer": ["A"]
    },
    {
        "id": "4-16",
        "type": "single",
        "question": "為避免 ARP spoofing 攻擊而造成個人電腦之路由器設定錯誤，最簡易的方法就是利用 netstat 網路工具來查詢電腦所連接的閘道器是否正確，下列哪一個是正確的指令？",
        "options": [
            {
                "label": "netstat -st",
                "value": "A"
            },
            {
                "label": "netstat -r",
                "value": "B"
            },
            {
                "label": "netstat -u",
                "value": "C"
            },
            {
                "label": "netstat -p",
                "value": "D"
            }
        ],
        "answer": ["B"]
    },
    {
        "id": "4-17",
        "type": "multiple",
        "question": "下列哪些網路安全工具可以檢測系統的弱點？（複選）",
        "options": [
            {
                "label": "nessus",
                "value": "A"
            },
            {
                "label": "MRTG",
                "value": "B"
            },
            {
                "label": "SNMP",
                "value": "C"
            },
            {
                "label": "nmap",
                "value": "D"
            }
        ],
        "answer": ["A", "D"]
    },
    {
        "id": "4-18",
        "type": "single",
        "question": "下列那一項不屬於防毒軟體之設計方式？",
        "options": [
            {
                "label": "抽查式的防毒軟體",
                "value": "A"
            },
            {
                "label": "掃描式的防毒軟體",
                "value": "B"
            },
            {
                "label": "檢查碼式的防毒軟體",
                "value": "C"
            },
            {
                "label": "推測病毒行為模式的防毒軟體",
                "value": "D"
            }
        ],
        "answer": ["A"]
    },
    {
        "id": "4-19",
        "type": "single",
        "question": "防毒軟體的功能不包含下列哪一項？",
        "options": [
            {
                "label": "即時偵測電腦病毒",
                "value": "A"
            },
            {
                "label": "掃瞄檔案是否有電腦病毒",
                "value": "B"
            },
            {
                "label": "掃瞄電腦系統是否有安全漏洞",
                "value": "C"
            },
            {
                "label": "處理中電腦病毒的檔案",
                "value": "D"
            }
        ],
        "answer": ["C"]
    },
    {
        "id": "4-20",
        "type": "single",
        "question": "防毒軟體安裝完成後是否還需要做更新動作，下列敘述哪一項正確？",
        "options": [
            {
                "label": "不需要，因為軟體已經可以阻擋所有的病毒",
                "value": "A"
            },
            {
                "label": "需要，因為防毒軟體等級可能不夠好",
                "value": "B"
            },
            {
                "label": "需要，因為軟體更新可以新增防毒樣本",
                "value": "C"
            },
            {
                "label": "需要，因為軟體更新可以讓電腦的執行速度更快",
                "value": "D"
            }
        ],
        "answer": ["C"]
    },
    {
        "id": "4-21",
        "type": "single",
        "question": "電腦遭駭客攻擊，最大原因為網路安全防護太脆弱，所以我們應該安裝下列哪一項基本的防護工具？",
        "options": [
            {
                "label": "防毒軟體與系統軟體",
                "value": "A"
            },
            {
                "label": "防火牆與防毒軟體",
                "value": "B"
            },
            {
                "label": "兩套不同廠牌的防毒軟體",
                "value": "C"
            },
            {
                "label": "防火牆與系統軟體",
                "value": "D"
            }
        ],
        "answer": ["B"]
    },
    {
        "id": "4-22",
        "type": "single",
        "question": "萬一電腦被植入間諜軟體，下列處理方式哪一項正確？",
        "options": [
            {
                "label": "只要電腦裡沒有重要資料就沒關係",
                "value": "A"
            },
            {
                "label": "使用移除工具將間諜軟體移除",
                "value": "B"
            },
            {
                "label": "修補作業系統",
                "value": "C"
            },
            {
                "label": "做資料備份",
                "value": "D"
            }
        ],
        "answer": ["B"]
    },
    {
        "id": "4-23",
        "type": "single",
        "question": "電腦如果出現下列哪一種現象時，可能是被植入間諜軟體？",
        "options": [
            {
                "label": "經常突然跳出來路不明的視窗",
                "value": "A"
            },
            {
                "label": "鍵盤或滑鼠無法操作",
                "value": "B"
            },
            {
                "label": "連結不到某些網站",
                "value": "C"
            },
            {
                "label": "無法連上無線網路",
                "value": "D"
            }
        ],
        "answer": ["A"]
    },
    {
        "id": "4-24",
        "type": "single",
        "question": "一旦電腦被植入間諜程式如果想移除它，下列哪一種措施錯誤？",
        "options": [
            {
                "label": "上網查詢相關手動移除方式，但移除前先將重要資訊備份",
                "value": "A"
            },
            {
                "label": "上網下載間諜移除程式，直接安裝後就可以清除",
                "value": "B"
            },
            {
                "label": "至可靠的網下載經認證過的清除軟體，備份重要資訊後再執行清除動作",
                "value": "C"
            },
            {
                "label": "洽詢專業廠商處理",
                "value": "D"
            }
        ],
        "answer": ["B"]
    },
    {
        "id": "4-25",
        "type": "single",
        "question": "關於防毒軟體的敘述，下列哪一項錯誤？",
        "options": [
            {
                "label": "免費的防毒軟體就是沒有付費的軟體好",
                "value": "A"
            },
            {
                "label": "付費的防毒軟體不一定比免費的軟體差",
                "value": "B"
            },
            {
                "label": "免費的防毒軟體不一定比付費的軟體差",
                "value": "C"
            },
            {
                "label": "付費的防毒軟體不一定比免費的軟體好",
                "value": "D"
            }
        ],
        "answer": ["A"]
    },
    {
        "id": "4-26",
        "type": "single",
        "question": "若要隱藏内部網路伺服器的 IP 位址（IP Address）及連接埠（Port），應採用下列哪一種類型的防火牆技術？",
        "options": [
            {
                "label": "屏蔽路由器（Screening Router）",
                "value": "A"
            },
            {
                "label": "動態封包過濾器（Dynamic Packet Filter）",
                "value": "B"
            },
            {
                "label": "網路位址轉（Network Address Translation）",
                "value": "C"
            },
            {
                "label": "應用層閘道（Application Level Gateway）",
                "value": "D"
            }
        ],
        "answer": ["C"]
    },
    {
        "id": "4-27",
        "type": "single",
        "question": "傳統的防火牆可達成下列那一項作業？",
        "options": [
            {
                "label": "防止病毒 / 蠕蟲入侵",
                "value": "A"
            },
            {
                "label": "驗證資料的完整性",
                "value": "B"
            },
            {
                "label": "封包過濾",
                "value": "C"
            },
            {
                "label": "阻擋後門程式",
                "value": "D"
            }
        ],
        "answer": ["C"]
    },
    {
        "id": "4-28",
        "type": "single",
        "question": "關於防火牆的敘述，下列哪一項錯誤？",
        "options": [
            {
                "label": "防火牆可以檢查封包的内容防止病毒通過",
                "value": "A"
            },
            {
                "label": "防火牆可以檢查封包的埠號（Port），將不合乎預先設定之條件的封包丟棄",
                "value": "B"
            },
            {
                "label": "防火牆可以管制封包的來源與流向，將不合乎預先設定之條件的封包丟棄",
                "value": "C"
            },
            {
                "label": "封包過濾防火牆（Packet-filtering Firewall）的安全性比狀態檢視防火牆（Stateful Inspection Firewall）低",
                "value": "D"
            }
        ],
        "answer": ["A"]
    },
    {
        "id": "4-29",
        "type": "single",
        "question": "關於防火牆的限制，下列哪一項錯誤？",
        "options": [
            {
                "label": "無法保護 bypass 的攻擊",
                "value": "A"
            },
            {
                "label": "可以防止內部攻擊",
                "value": "B"
            },
            {
                "label": "防火牆管不到不經過他的連線",
                "value": "C"
            },
            {
                "label": "防火牆無法防範病毒爆發",
                "value": "D"
            }
        ],
        "answer": ["B"]
    },
    {
        "id": "4-30",
        "type": "single",
        "question": "關於 DMZ（DeMilitarize Zone）的敘述，下列哪一項錯誤？",
        "options": [
            {
                "label": "DMZ 泛指内部網路和外部網路之間的緩衝地帶",
                "value": "A"
            },
            {
                "label": "只要外部使用者可以直接接觸到的系統，原則上應該架設在 DMZ 内",
                "value": "B"
            },
            {
                "label": "對外的服務，如 WEB、FTP 等皆須建置在 DMZ 内，避免被入侵時内部網路受到嚴重的威脅",
                "value": "C"
            },
            {
                "label": "放置在 DMZ 内的對外服務，若要存取内部網路可以直接進行，沒有安全問題",
                "value": "D"
            }
        ],
        "answer": ["D"]
    },
    {
        "id": "4-31",
        "type": "multiple",
        "question": "架設 DMZ（DeMilitarized Zone）前，必須有下列哪些前置動作？（複選）",
        "options": [
            {
                "label": "災難復原與備份",
                "value": "A"
            },
            {
                "label": "建置在 DMZ 内的服務",
                "value": "B"
            },
            {
                "label": "內部網路與 DMZ 的網路架構",
                "value": "C"
            },
            {
                "label": "設定相關規則政策",
                "value": "D"
            }
        ],
        "answer": ["A", "B", "C", "D"]
    },
    {
        "id": "4-32",
        "type": "multiple",
        "question": "如附圖所示，為防火牆配置架構，下列哪些是此 DMZ（DeMilitarize Zone）架構的缺點？（複選）",
        "media": {
            "type": "table",
            "data": [
                [["<map><img src=\"images/4-32.png\" alt=\"題目 4-32 圖片\"></map>"]]
            ]
        },
        "options": [
            {
                "label": "如有大量的頻寬需求，外部防火牆必須有處理大量資料的能力",
                "value": "A"
            },
            {
                "label": "建置成本不高",
                "value": "B"
            },
            {
                "label": "內部網路與網際網路之間的傳輸會通過 DMZ",
                "value": "C"
            },
            {
                "label": "內部網路對外需經過二層防火牆",
                "value": "D"
            }
        ],
        "answer": ["A", "C", "D"]
    },
    {
        "id": "4-33",
        "type": "single",
        "question": "下列哪一項不是網路轉址 NAT 服務的優點？",
        "options": [
            {
                "label": "由於只使用少數 IP 對應後端電腦，因此大幅減少實體 IP 的使用量",
                "value": "A"
            },
            {
                "label": "外部網路 IP 可重複在不同環境下使用",
                "value": "B"
            },
            {
                "label": "只有實體 IP 才會被外部存取，因此在内部私有 IP 網段內安全度大為提升",
                "value": "C"
            },
            {
                "label": "内部網路 IP 可重複在不同環境下使用",
                "value": "D"
            }
        ],
        "answer": ["B"]
    },
    {
        "id": "4-34",
        "type": "single",
        "question": "數位憑證之應用，與下列哪一個資訊安全技術關聯性最直接？",
        "options": [
            {
                "label": "AES",
                "value": "A"
            },
            {
                "label": "Triple DES",
                "value": "B"
            },
            {
                "label": "Blowfish",
                "value": "C"
            },
            {
                "label": "RSA",
                "value": "D"
            }
        ],
        "answer": ["D"]
    },
    {
        "id": "4-35",
        "type": "multiple",
        "question": "如附圖所示，下列敘述哪些是此 DMZ（DeMilitarized Zone）架構的優點優點？（複選）",
        "media": {
            "type": "table",
            "data": [
                [["<map><img src=\"images/4-35.png\" alt=\"題目 4-35 圖片\"></map>"]]
            ]
        },
        "options": [
            {
                "label": "建置費用極高",
                "value": "A"
            },
            {
                "label": "DMZ 和内部網路不會佔用彼此頻寬",
                "value": "B"
            },
            {
                "label": "内部網路、DMZ 及 Internet 區隔容易",
                "value": "C"
            },
            {
                "label": "DMZ 與 LAN 内之電腦可以不受限制互相存取",
                "value": "D"
            }
        ],
        "answer": ["B", "C"]
    },
    {
        "id": "4-36",
        "type": "single",
        "question": "為了保護資料私密性，一般目前大部分都不採取單一 DES，其最主要的原因，下列哪一項正確？",
        "options": [
            {
                "label": "密鑰長度太短容易受暴力攻擊",
                "value": "A"
            },
            {
                "label": "受專利保護應用成本相對偏高",
                "value": "B"
            },
            {
                "label": "核心技術不夠公開透明有疑慮",
                "value": "C"
            },
            {
                "label": "核心功能已被破解而不安全",
                "value": "D"
            }
        ],
        "answer": ["A"]
    },
    {
        "id": "4-37",
        "type": "single",
        "question": "網站資料庫系統遭受資料隱碼入侵（SQL injection）攻擊，下列哪一項是被攻擊的主要原因？",
        "options": [
            {
                "label": "網站管理者採取短於 8 字元長度的通行密碼",
                "value": "A"
            },
            {
                "label": "網站管理者並未定期更換通行密碼",
                "value": "B"
            },
            {
                "label": "網站設計者未對使用者輸入之資料進行完整查驗",
                "value": "C"
            },
            {
                "label": "網站設計者未對輸出給使用者的資料進行資料安全性查驗",
                "value": "D"
            }
        ],
        "answer": ["C"]
    },
    {
        "id": "4-38",
        "type": "single",
        "question": "使用加密演算法對某資料進行加密，是要確保該資料可以滿足下列哪一項安全之需求？",
        "options": [
            {
                "label": "鑑別性（Authenticity）",
                "value": "A"
            },
            {
                "label": "完整性（Integrity）",
                "value": "B"
            },
            {
                "label": "機密性（Confidentiality）",
                "value": "C"
            },
            {
                "label": "不可否認性（Non-Repudiation）",
                "value": "D"
            }
        ],
        "answer": ["C"]
    },
    {
        "id": "4-39",
        "type": "single",
        "question": "關於數位簽章（Digital Sinnature）的運作原理與應用特性，下列敘述哪一項錯誤？",
        "options": [
            {
                "label": "簽署者使用所持有的私鑰對欲簽署訊息進行簽署",
                "value": "A"
            },
            {
                "label": "驗證者必須獲得簽署者的公鑰後，才能進行簽章驗證",
                "value": "B"
            },
            {
                "label": "簽署者可重複使用某一訊息的合法簽章，做為另一不同訊息的合法簽章",
                "value": "C"
            },
            {
                "label": "簽署者、欲簽署訊息、簽章三者之間存在唯一的繫連關係，可用以達成簽署者對簽署訊息的不可否認性",
                "value": "D"
            }
        ],
        "answer": ["D"]
    },
    {
        "id": "4-40",
        "type": "single",
        "question": "為了防止天然災害對儲存資料所造成的毁損或遺失，單位應採取下列哪一項安全措施？",
        "options": [
            {
                "label": "人力備援",
                "value": "A"
            },
            {
                "label": "資料加密",
                "value": "B"
            },
            {
                "label": "存取控制",
                "value": "C"
            },
            {
                "label": "資料備份",
                "value": "D"
            }
        ],
        "answer": ["D"]
    },
    {
        "id": "4-41",
        "type": "single",
        "question": "企業組織欲導入 ISO 27001 資訊安全管理系統，在標準的執行步驟中，下列哪一項是第一個步驟？",
        "options": [
            {
                "label": "制訂資訊安全政策",
                "value": "A"
            },
            {
                "label": "制訂適用性聲明",
                "value": "B"
            },
            {
                "label": "定義資訊安全管理系統的適用範圍",
                "value": "C"
            },
            {
                "label": "制訂營運持續計畫",
                "value": "D"
            }
        ],
        "answer": ["C"]
    },
    {
        "id": "4-42",
        "type": "single",
        "question": "企業組織欲符合 ISO 27001 資訊安全管理系統標準的稽核要求，必須建立完整的四階文件。企業組織內相關資訊安全的管理程序文件是屬於第幾階文件？",
        "options": [
            {
                "label": "第一階文件",
                "value": "A"
            },
            {
                "label": "第二階文件",
                "value": "B"
            },
            {
                "label": "第三階文件",
                "value": "C"
            },
            {
                "label": "第四階文件",
                "value": "D"
            }
        ],
        "answer": ["B"]
    },
    {
        "id": "4-43",
        "type": "single",
        "question": "在公開金鑰密碼的系統中，如果 A 希望他所送出之特定文件僅有 B 可以讀取，其他人都不能讀取，請問 A 應該對該份文件採用下列哪一項進行加密？",
        "options": [
            {
                "label": "A 的公開金鑰",
                "value": "A"
            },
            {
                "label": "A 的私密金鑰",
                "value": "B"
            },
            {
                "label": "B 的公開金鑰",
                "value": "C"
            },
            {
                "label": "B 的私密金鑰",
                "value": "D"
            }
        ],
        "answer": ["C"]
    },
    {
        "id": "4-44",
        "type": "single",
        "question": "關於資訊中心的安全防護措施，下列哪一項錯誤？",
        "options": [
            {
                "label": "重要檔案每天備份三份以上，並分別存放",
                "value": "A"
            },
            {
                "label": "裝設穩壓電源供應器及不斷電系統",
                "value": "B"
            },
            {
                "label": "設置煙霧及溫度感測器等設備，以防止災害發生",
                "value": "C"
            },
            {
                "label": "不同部門，資料也可以相互交流，以便支援合作，順利完成工作",
                "value": "D"
            }
        ],
        "answer": ["D"]
    },
    {
        "id": "4-45",
        "type": "single",
        "question": "如果一個僱員必須被停職，他的網路存取權限應該在下列哪一個時間點被終止？",
        "options": [
            {
                "label": "停職後一週",
                "value": "A"
            },
            {
                "label": "停職前一週",
                "value": "B"
            },
            {
                "label": "通知他停職前",
                "value": "C"
            },
            {
                "label": "不需關閉",
                "value": "D"
            }
        ],
        "answer": ["C"]
    },
    {
        "id": "5-01",
        "type": "single",
        "question": "下列哪一個 IP 是被定義為 LoopBack IP Address，可做為 TCP/IP 連線測試使用？",
        "options": [
            {
                "label": "0.0.0.0",
                "value": "A"
            },
            {
                "label": "255.255.255.255",
                "value": "B"
            },
            {
                "label": "127.0.0.1",
                "value": "C"
            },
            {
                "label": "192.168.240.200",
                "value": "D"
            }
        ],
        "answer": ["C"]
    },
    {
        "id": "5-02",
        "type": "single",
        "question": "關於網路故障排除的方法，下列哪一項錯誤？",
        "options": [
            {
                "label": "下而上的檢測",
                "value": "A"
            },
            {
                "label": "上而下的檢測",
                "value": "B"
            },
            {
                "label": "任意檢測",
                "value": "C"
            },
            {
                "label": "分區檢測",
                "value": "D"
            }
        ],
        "answer": ["C"]
    },
    {
        "id": "5-03",
        "type": "multiple",
        "question": "當網路發生故障時，應採取的故障管理（Fault Management）作為，下列哪些正確？（複選）",
        "options": [
            {
                "label": "偵測（Detect）",
                "value": "A"
            },
            {
                "label": "隔離（Isolate）",
                "value": "B"
            },
            {
                "label": "重設（Reconfigure）",
                "value": "C"
            },
            {
                "label": "編碼（Coding）",
                "value": "D"
            }
        ],
        "answer": ["A", "B", "C"]
    },
    {
        "id": "5-04",
        "type": "multiple",
        "question": "下列哪些是屬於組態管理（Configuration Management）内容，並應該記錄在網管文件資料之中？（複選）",
        "options": [
            {
                "label": "元件清單（Inventory）",
                "value": "A"
            },
            {
                "label": "流量負載（Traffic load）",
                "value": "B"
            },
            {
                "label": "組態（Configuration）",
                "value": "C"
            },
            {
                "label": "參數存參（Provision）",
                "value": "D"
            }
        ],
        "answer": ["A", "C", "D"]
    },
    {
        "id": "5-05",
        "type": "single",
        "question": "面對日趨複雜的網路環境，下列哪一項可協助網管人員有效的管理複雜網路，並有助於尋找問題所在？",
        "options": [
            {
                "label": "ARP",
                "value": "A"
            },
            {
                "label": "ICMP",
                "value": "B"
            },
            {
                "label": "SNMP",
                "value": "C"
            },
            {
                "label": "MIB",
                "value": "D"
            }
        ],
        "answer": ["C"]
    },
    {
        "id": "5-06",
        "type": "single",
        "question": "簡單網路管理協定（Simple Network Management Protocpl,SNMP）在網路管理中，其功能不包含下列哪一項？",
        "options": [
            {
                "label": "故障管理",
                "value": "A"
            },
            {
                "label": "組態管理",
                "value": "B"
            },
            {
                "label": "效能管理",
                "value": "C"
            },
            {
                "label": "帳戶管理",
                "value": "D"
            }
        ],
        "answer": ["D"]
    },
    {
        "id": "5-07",
        "type": "single",
        "question": "測試網路封包能否通過 IP 協定到達特定主機，可使用列哪一項公用程式？",
        "options": [
            {
                "label": "ping",
                "value": "A"
            },
            {
                "label": "ipconfig",
                "value": "B"
            },
            {
                "label": "netstat",
                "value": "C"
            },
            {
                "label": "tracert",
                "value": "D"
            }
        ],
        "answer": ["A"]
    },
    {
        "id": "5-08",
        "type": "single",
        "question": "追蹤本機端電腦到目的電腦之間所經過的節點（Node），可使用下列哪一項公用程式？",
        "options": [
            {
                "label": "ping",
                "value": "A"
            },
            {
                "label": "ipconfig",
                "value": "B"
            },
            {
                "label": "netstat",
                "value": "C"
            },
            {
                "label": "tracert",
                "value": "D"
            }
        ],
        "answer": ["D"]
    },
    {
        "id": "5-09",
        "type": "multiple",
        "question": "網路卡燈號（綠燈、橘燈）兩者燈號皆未顯示，下列哪些是可能發生的狀況？（複選）",
        "options": [
            {
                "label": "網路卡未正常驅動",
                "value": "A"
            },
            {
                "label": "網路卡故障",
                "value": "B"
            },
            {
                "label": "ISP 未能提供服務",
                "value": "C"
            },
            {
                "label": "DHCP 未能正常發送 IP",
                "value": "D"
            }
        ],
        "answer": ["A", "B"]
    },
    {
        "id": "5-11",
        "type": "single",
        "question": "下列哪一項是 Widows 系端遠端連線預設連接埠（Port）號？",
        "options": [
            {
                "label": "3389",
                "value": "A"
            },
            {
                "label": "5800",
                "value": "B"
            },
            {
                "label": "5900",
                "value": "C"
            },
            {
                "label": "8080",
                "value": "D"
            }
        ],
        "answer": ["A"]
    },
    {
        "id": "5-12",
        "type": "single",
        "question": "查詢路由表及新增或移除某個路由路徑，可使用下列哪一項公用程式？",
        "options": [
            {
                "label": "arp",
                "value": "A"
            },
            {
                "label": "nbtstat",
                "value": "B"
            },
            {
                "label": "pathping",
                "value": "C"
            },
            {
                "label": "route",
                "value": "D"
            }
        ],
        "answer": ["D"]
    },
    {
        "id": "5-13",
        "type": "multiple",
        "question": "不列哪些為電腦使用上正確的防護作為？（複選）",
        "options": [
            {
                "label": "關閉防火牆",
                "value": "A"
            },
            {
                "label": "即時更新電腦系統",
                "value": "B"
            },
            {
                "label": "安裝防毒軟體並定期更新",
                "value": "C"
            },
            {
                "label": "定期進行資料備份",
                "value": "D"
            }
        ],
        "answer": ["B", "C", "D"]
    },
    {
        "id": "5-14",
        "type": "single",
        "question": "檢測網路服務中 DNS 可否正進行網域名解析，可使用下列哪一項公用程式？",
        "options": [
            {
                "label": "arp",
                "value": "A"
            },
            {
                "label": "traceroute",
                "value": "B"
            },
            {
                "label": "nbtstat",
                "value": "C"
            },
            {
                "label": "nslookup",
                "value": "D"
            }
        ],
        "answer": ["D"]
    },
    {
        "id": "5-15",
        "type": "single",
        "question": "下列哪一項狀況會使整個區域網路造成癱痪？",
        "options": [
            {
                "label": "Client 端電腦故障",
                "value": "A"
            },
            {
                "label": "網路迴圈（Loop）",
                "value": "B"
            },
            {
                "label": "無線網卡故障",
                "value": "C"
            },
            {
                "label": "有線網卡故障",
                "value": "D"
            }
        ],
        "answer": ["B"]
    },
    {
        "id": "5-16",
        "type": "multiple",
        "question": "下列哪些是建立 VLAN 帶來的好處？（複選）",
        "options": [
            {
                "label": "降低網絡設計的自由度",
                "value": "A"
            },
            {
                "label": "增加安全性",
                "value": "B"
            },
            {
                "label": "增加管理成本",
                "value": "C"
            },
            {
                "label": "增加可管理性",
                "value": "D"
            }
        ],
        "answer": ["B", "D"]
    },
    {
        "id": "5-17",
        "type": "multiple",
        "question": "下列哪些是引起網路廣播風暴（Broadcast Storm）可能原因？（複選）",
        "options": [
            {
                "label": "網路設備故障",
                "value": "A"
            },
            {
                "label": "網路卡故障",
                "value": "B"
            },
            {
                "label": "ARP 病毒",
                "value": "C"
            },
            {
                "label": "網路迴圈 （Loop）",
                "value": "D"
            }
        ],
        "answer": ["A", "B", "C", "D"]
    },
    {
        "id": "5-18",
        "type": "multiple",
        "question": "網路守護控管軟體，一般可以控管的範圍包含下列哪些？（複選）",
        "options": [
            {
                "label": "阻擋不當網站",
                "value": "A"
            },
            {
                "label": "阻擋網頁下載",
                "value": "B"
            },
            {
                "label": "上網時間控管",
                "value": "C"
            },
            {
                "label": "上網地點控管",
                "value": "D"
            }
        ],
        "answer": ["A", "C"]
    },
    {
        "id": "5-19",
        "type": "single",
        "question": "主要可負責監聽網路封包，並依據預先設定的安全策略（SecurityPolicy），當網路發生異常時，可即時通報、有效的紀錄各項異常結果，是指下列哪一項有效作為？",
        "options": [
            {
                "label": "入侵防護（Intrusion Prevention System, IPS）",
                "value": "A"
            },
            {
                "label": "入侵偵測（Intrusion Detection System, IDS）",
                "value": "B"
            },
            {
                "label": "病毒防護",
                "value": "C"
            },
            {
                "label": "系統更新",
                "value": "D"
            }
        ],
        "answer": ["B"]
    },
    {
        "id": "5-20",
        "type": "multiple",
        "question": "下列哪些作為是企業網路防護的有效措施？（複選）",
        "options": [
            {
                "label": "建置光纖網路（Optical Network）",
                "value": "A"
            },
            {
                "label": "進行入侵防護（Intrusion Prevention System, IPS）",
                "value": "B"
            },
            {
                "label": "進行入侵偵測（Intrusion Detection System, IDS）",
                "value": "C"
            },
            {
                "label": "建立防火牆（Firewall）",
                "value": "D"
            }
        ],
        "answer": ["B", "C", "D"]
    },
    {
        "id": "5-21",
        "type": "single",
        "question": "下列哪一項設備可用來檢測光纖網路中事件點的位置？",
        "options": [
            {
                "label": "光時域反射器（Optical Time-Domain Reflectometer, OTDR）",
                "value": "A"
            },
            {
                "label": "光源（Light Source）",
                "value": "B"
            },
            {
                "label": "光功率計（Power Meter）",
                "value": "C"
            },
            {
                "label": "網路測試器（Cable Tester）",
                "value": "D"
            }
        ],
        "answer": ["A"]
    },
    {
        "id": "5-22",
        "type": "multiple",
        "question": "一般用來偵測光纖纜線常用的波長有下列哪些？（複選）",
        "options": [
            {
                "label": "990 nm",
                "value": "A"
            },
            {
                "label": "1,100 nm",
                "value": "B"
            },
            {
                "label": "1,310 nm",
                "value": "C"
            },
            {
                "label": "1,550 nm",
                "value": "D"
            }
        ],
        "answer": ["C", "D"]
    },
    {
        "id": "5-23",
        "type": "single",
        "question": "關於網路頻寬速度問題，應向下列哪一個單位洽詢？",
        "options": [
            {
                "label": "PC 製造商",
                "value": "A"
            },
            {
                "label": "Hub 製造商",
                "value": "B"
            },
            {
                "label": "Switch 製造商",
                "value": "C"
            },
            {
                "label": "網際網路服務供應商（ISP）",
                "value": "D"
            }
        ],
        "answer": ["D"]
    },
    {
        "id": "5-24",
        "type": "single",
        "question": "使用一般的網路測試器（Cable Tester）進行網路線測試，其功能不包含下列哪一項？",
        "options": [
            {
                "label": "導通",
                "value": "A"
            },
            {
                "label": "斷路",
                "value": "B"
            },
            {
                "label": "短路",
                "value": "C"
            },
            {
                "label": "網路速度",
                "value": "D"
            }
        ],
        "answer": ["D"]
    },
    {
        "id": "5-25",
        "type": "single",
        "question": "一般的網路測試器（Cable Tester）可測試的接頭形式，不包含下列哪一項？",
        "options": [
            {
                "label": "RJ-11 接頭",
                "value": "A"
            },
            {
                "label": "RJ-12 接頭",
                "value": "B"
            },
            {
                "label": "RJ-45 接頭",
                "value": "C"
            },
            {
                "label": "SC 接頭",
                "value": "D"
            }
        ],
        "answer": ["D"]
    },
    {
        "id": "5-26",
        "type": "multiple",
        "question": "若兩台電腦主機須進行網路實體連接，則對接兩台主機網路卡網路線可使用下列哪些 TIA/EIA 標準的接法？（複選）",
        "options": [
            {
                "label": "568A / 568A",
                "value": "A"
            },
            {
                "label": "568A / 568B",
                "value": "B"
            },
            {
                "label": "568B / 568A",
                "value": "C"
            },
            {
                "label": "568B / 568B",
                "value": "D"
            }
        ],
        "answer": ["B", "C"]
    },
    {
        "id": "5-27",
        "type": "single",
        "question": "下列哪一項屬於實體層的故障問題？",
        "options": [
            {
                "label": "纜線短路",
                "value": "A"
            },
            {
                "label": "廣播風暴",
                "value": "B"
            },
            {
                "label": "路由器故障",
                "value": "C"
            },
            {
                "label": "IP 位置錯誤",
                "value": "D"
            }
        ],
        "answer": ["A"]
    },
    {
        "id": "5-28",
        "type": "multiple",
        "question": "SNMP 管理模式主要透過下列哪些基本指令，以達成網路管理目的？（複選）",
        "options": [
            {
                "label": "clr",
                "value": "A"
            },
            {
                "label": "get",
                "value": "B"
            },
            {
                "label": "set",
                "value": "C"
            },
            {
                "label": "trap",
                "value": "D"
            }
        ],
        "answer": ["B", "C", "D"]
    },
    {
        "id": "5-29",
        "type": "multiple",
        "question": "電腦主機與網路設備進行網路實體連接，則網路線可使用下列哪些 TIA/EIA 標準的接法？（複選）",
        "options": [
            {
                "label": "568A / 568A",
                "value": "A"
            },
            {
                "label": "568A / 568B",
                "value": "B"
            },
            {
                "label": "568B / 568A",
                "value": "C"
            },
            {
                "label": "568B / 568B",
                "value": "D"
            }
        ],
        "answer": ["A", "D"]
    },
    {
        "id": "5-30",
        "type": "single",
        "question": "若偵測到網路異常，經判定為 Hub 故障，係屬於 OSI 哪一層？",
        "options": [
            {
                "label": "應用層",
                "value": "A"
            },
            {
                "label": "網路層",
                "value": "B"
            },
            {
                "label": "實體層",
                "value": "C"
            },
            {
                "label": "資料連結層",
                "value": "D"
            }
        ],
        "answer": ["C"]
    },
    {
        "id": "5-31",
        "type": "multiple",
        "question": "關於網路障礙管理（Fault Management），一般大致區分為列哪些？",
        "options": [
            {
                "label": "故障定位",
                "value": "A"
            },
            {
                "label": "CPU 效能監視",
                "value": "B"
            },
            {
                "label": "安全問題",
                "value": "C"
            },
            {
                "label": "警示監視",
                "value": "D"
            }
        ],
        "answer": ["A", "D"]
    },
    {
        "id": "5-32",
        "type": "single",
        "question": "SNMP 網路管理主要運作方式，下列哪一項錯誤？",
        "options": [
            {
                "label": "堆疊（Stack）",
                "value": "A"
            },
            {
                "label": "輪詢（Polling）",
                "value": "B"
            },
            {
                "label": "警示（Trap）",
                "value": "C"
            },
            {
                "label": "設定（Set）",
                "value": "D"
            }
        ],
        "answer": ["A"]
    },
    {
        "id": "5-33",
        "type": "single",
        "question": "下列哪一項可在公共網路架構上使用以加密的通道協議（Tunneling Protocol）建立一個私人且安全的網路？",
        "options": [
            {
                "label": "NMS（Network Management System）",
                "value": "A"
            },
            {
                "label": "VPN（Virtual Private Network）",
                "value": "B"
            },
            {
                "label": "NOS（Network Operating System）",
                "value": "C"
            },
            {
                "label": "VPC（Virtual Private Cloud）",
                "value": "D"
            }
        ],
        "answer": ["B"]
    },
    {
        "id": "5-34",
        "type": "single",
        "question": "關於無線網路的 SSID 敘述，下列哪一項錯誤？",
        "options": [
            {
                "label": "可自由設定名稱",
                "value": "A"
            },
            {
                "label": "最長可輸入 32 個字元",
                "value": "B"
            },
            {
                "label": "無線網路的識別名稱",
                "value": "C"
            },
            {
                "label": "網路上的 SSID 必須為隱藏",
                "value": "D"
            }
        ],
        "answer": ["D"]
    },
    {
        "id": "5-35",
        "type": "single",
        "question": "若要建立 WDS（Wireless Distribution System）的條件，下列哪一項錯誤？",
        "options": [
            {
                "label": "兩台 AP 的連線模式需相同",
                "value": "A"
            },
            {
                "label": "兩台 AP 設定相同 SSID",
                "value": "B"
            },
            {
                "label": "AP-2 的 DHCP 應設定 Enable",
                "value": "C"
            },
            {
                "label": "兩台 AP 須設定為同一網段不同 IP",
                "value": "D"
            }
        ],
        "answer": ["C"]
    },
    {
        "id": "5-36",
        "type": "single",
        "question": "若 Client 端電腦無法取得動態 IP 位址，下列哪一項是可能發生題的伺服器？",
        "options": [
            {
                "label": "NAT",
                "value": "A"
            },
            {
                "label": "DHCP",
                "value": "B"
            },
            {
                "label": "DNS",
                "value": "C"
            },
            {
                "label": "WEB",
                "value": "D"
            }
        ],
        "answer": ["B"]
    },
    {
        "id": "5-37",
        "type": "single",
        "question": "若使用網域名稱無法連上網頁，使用 IP 位址可以連上網頁，下列哪一項是可能發生問題的伺服器？",
        "options": [
            {
                "label": "NAT",
                "value": "A"
            },
            {
                "label": "DHCP",
                "value": "B"
            },
            {
                "label": "DNS",
                "value": "C"
            },
            {
                "label": "WEB",
                "value": "D"
            }
        ],
        "answer": ["C"]
    },
    {
        "id": "5-38",
        "type": "single",
        "question": "網路佈線實務中，應採用下列哪一項佈線作為較為適宜？",
        "options": [
            {
                "label": "挑選昂貴的網路線材",
                "value": "A"
            },
            {
                "label": "不必理會標準作業程序",
                "value": "B"
            },
            {
                "label": "可不依網路拓樸佈線",
                "value": "C"
            },
            {
                "label": "採用結構化網路佈線",
                "value": "D"
            }
        ],
        "answer": ["D"]
    },
    {
        "id": "5-39",
        "type": "multiple",
        "question": "下列哪些設備故障，可能會造成無線網路斷線無法使用？（複選）",
        "options": [
            {
                "label": "無線 AP",
                "value": "A"
            },
            {
                "label": "無線滑鼠",
                "value": "B"
            },
            {
                "label": "防火牆",
                "value": "C"
            },
            {
                "label": "無線網卡",
                "value": "D"
            }
        ],
        "answer": ["A", "D"]
    },
    {
        "id": "5-40",
        "type": "multiple",
        "question": "光纖網路中，若單芯單模的光纜斷線，可採用的修復作為下列哪些正確？（複選）",
        "options": [
            {
                "label": "使用光纖連接器與插座進行連接",
                "value": "A"
            },
            {
                "label": "更換 RJ-45 接頭",
                "value": "B"
            },
            {
                "label": "採用熔接方式修復",
                "value": "C"
            },
            {
                "label": "更換 Cat.6 網路線",
                "value": "D"
            }
        ],
        "answer": ["A", "C"]
    },
    {
        "id": "5-41",
        "type": "single",
        "question": "兩台電腦都設定相同 IP，下列敘述哪一項正確？",
        "options": [
            {
                "label": "兩台電腦都可以上網",
                "value": "A"
            },
            {
                "label": "會造成兩台電腦 IP 衝突，無法上網",
                "value": "B"
            },
            {
                "label": "會造成 DHCP 伺服器當機",
                "value": "C"
            },
            {
                "label": "會形成廣播封包",
                "value": "D"
            }
        ],
        "answer": ["B"]
    },
    {
        "id": "5-42",
        "type": "single",
        "question": "區域網路中，動態 IP 的管理與分配，是下列哪一項服器所能提供的功能？",
        "options": [
            {
                "label": "FTP",
                "value": "A"
            },
            {
                "label": "NAT",
                "value": "B"
            },
            {
                "label": "DHCP",
                "value": "C"
            },
            {
                "label": "DNS",
                "value": "D"
            }
        ],
        "answer": ["C"]
    },
    {
        "id": "5-43",
        "type": "multiple",
        "question": "固定 IP 設定時，應設定相關內容包含下列哪些？（複選）",
        "options": [
            {
                "label": "動態 IP 位址",
                "value": "A"
            },
            {
                "label": "IP 位址",
                "value": "B"
            },
            {
                "label": "預設閘道",
                "value": "C"
            },
            {
                "label": "子網路遮罩",
                "value": "D"
            }
        ],
        "answer": ["B", "C", "D"]
    },
    {
        "id": "5-44",
        "type": "multiple",
        "question": "常用的無線網路頻段，包含下列哪些？（複選）",
        "options": [
            {
                "label": "2.4 GHz",
                "value": "A"
            },
            {
                "label": "3 GHz",
                "value": "B"
            },
            {
                "label": "4 GHz",
                "value": "C"
            },
            {
                "label": "5 GHz",
                "value": "D"
            }
        ],
        "answer": ["A", "D"]
    },
    {
        "id": "5-45",
        "type": "multiple",
        "question": "經查 ADSL 數據機出現訊號異常，可行的解決方法為下列哪些？（複選）",
        "options": [
            {
                "label": "將電腦重新開機",
                "value": "A"
            },
            {
                "label": "將數據機重置",
                "value": "B"
            },
            {
                "label": "向 ISP 網路客服中心查詢",
                "value": "C"
            },
            {
                "label": "將集線器電源關閉重新啟動",
                "value": "D"
            }
        ],
        "answer": ["B", "C"]
    },
    {
        "id": "5-46",
        "type": "single",
        "question": "當網路發生異常封包或是相關行為時，可即時通報網管人員，並採取相對處置措施，是指下列哪一項作為？",
        "options": [
            {
                "label": "入侵防護（Intrusion Prevention System, IPS）",
                "value": "A"
            },
            {
                "label": "入侵偵測（Intrusion Detection System, IDS）",
                "value": "B"
            },
            {
                "label": "病毒防護",
                "value": "C"
            },
            {
                "label": "系統更新",
                "value": "D"
            }
        ],
        "answer": ["A"]
    },
    {
        "id": "5-47",
        "type": "single",
        "question": "由主機名稱查詢 IP 的過程，一般稱之為下列哪一項？",
        "options": [
            {
                "label": "正解（Forward）",
                "value": "A"
            },
            {
                "label": "反解（Reverse）",
                "value": "B"
            },
            {
                "label": "解析（Resolve）",
                "value": "C"
            },
            {
                "label": "分析（Analysis）",
                "value": "D"
            }
        ],
        "answer": ["A"]
    },
    {
        "id": "5-48",
        "type": "multiple",
        "question": "常見的無線網路安全機制，包含下列哪些項目？（複選）",
        "options": [
            {
                "label": "WEP",
                "value": "A"
            },
            {
                "label": "WPA",
                "value": "B"
            },
            {
                "label": "WPA2",
                "value": "C"
            },
            {
                "label": "SSID",
                "value": "D"
            }
        ],
        "answer": ["A", "B", "C"]
    },
    {
        "id": "5-49",
        "type": "single",
        "question": "若要防止電腦受到不明網路攻擊或中毒，可行的有效方法不包含下列哪一項？",
        "options": [
            {
                "label": "任意下載不明檔案",
                "value": "A"
            },
            {
                "label": "安裝防火牆並即時更新",
                "value": "B"
            },
            {
                "label": "作業系統啟動即時更新",
                "value": "C"
            },
            {
                "label": "保持良好的電腦使用習慣",
                "value": "D"
            }
        ],
        "answer": ["A"]
    },
    {
        "id": "5-50",
        "type": "single",
        "question": "對於公司員工離職，網管人員應採取的作為下列哪一項正確？",
        "options": [
            {
                "label": "正式離職前即可隨即停用其相關使用權限",
                "value": "A"
            },
            {
                "label": "運用公司網路私架 FTP 以供資訊交流使用",
                "value": "B"
            },
            {
                "label": "離職後依然開放公司網路相關權限供其使用",
                "value": "C"
            },
            {
                "label": "依公司標準程序停用其網路相關使用權限",
                "value": "D"
            }
        ],
        "answer": ["D"]
    },
    {
        "id": "5-51",
        "type": "multiple",
        "question": "加入專業的網路專業技術社群，有下列哪些好處？（複選）",
        "options": [
            {
                "label": "吸取經驗",
                "value": "A"
            },
            {
                "label": "獲取新知",
                "value": "B"
            },
            {
                "label": "促進專業成長",
                "value": "C"
            },
            {
                "label": "結交專業同好",
                "value": "D"
            }
        ],
        "answer": ["A", "B", "C", "D"]
    },
    {
        "id": "5-52",
        "type": "single",
        "question": "在網路的故障排除中，若有關於設備問題，可洽詢的最直接外部資源協助為下列哪一個單位？",
        "options": [
            {
                "label": "網路社群",
                "value": "A"
            },
            {
                "label": "網路搜尋",
                "value": "B"
            },
            {
                "label": "產品技術支援中心",
                "value": "C"
            },
            {
                "label": "軟體廠商",
                "value": "D"
            }
        ],
        "answer": ["C"]
    },
    {
        "id": "5-53",
        "type": "multiple",
        "question": "在網路的故障排除中，下列哪些是可能尋求的外部資源？（複選）",
        "options": [
            {
                "label": "先前維護文件",
                "value": "A"
            },
            {
                "label": "會計部門",
                "value": "B"
            },
            {
                "label": "系統建置廠商",
                "value": "C"
            },
            {
                "label": "相關網路專家",
                "value": "D"
            }
        ],
        "answer": ["A", "C", "D"]
    },
    {
        "id": "5-54",
        "type": "multiple",
        "question": "關於網路機房管理，下列哪些是應有的積極作為？（複選）",
        "options": [
            {
                "label": "管制人員進出",
                "value": "A"
            },
            {
                "label": "建置不斷電 UPS 系統",
                "value": "B"
            },
            {
                "label": "建立標準作業程序",
                "value": "C"
            },
            {
                "label": "機房無須消防設施",
                "value": "D"
            }
        ],
        "answer": ["A", "B", "C"]
    },
    {
        "id": "5-55",
        "type": "single",
        "question": "關於有線網路與無線網路之敘述，下列哪一項正確？",
        "options": [
            {
                "label": "有線網路無須考量佈線問題",
                "value": "A"
            },
            {
                "label": "有線網路無法使用光纖纜線",
                "value": "B"
            },
            {
                "label": "無線網路須考量無線射頻技術問題",
                "value": "C"
            },
            {
                "label": "無線網路比有線網路安全性較高",
                "value": "D"
            }
        ],
        "answer": ["C"]
    }
]

// 初始化變量
let quizQuestions = [];
let currentQuestionIndex = 0;
let userAnswers = [];
let timerInterval; // 用於儲存 setInterval 的 ID
let startTime;     // 儲存測驗開始時間
let totalSeconds;  // 改為只宣告，不初始化
let markedQuestions = new Set(); // 用 Set 儲存標記問題的索引 (0-based)

// DOM元素
const startBtn = document.getElementById('startBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const submitBtn = document.getElementById('submitBtn');
const welcomeScreen = document.getElementById('welcome-screen');
const quizContainer = document.getElementById('quiz-container');
const resultsContainer = document.getElementById('results-container');
const reviewContainer = document.getElementById('review-container');
const questionType = document.getElementById('question-type');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const questionNumber = document.getElementById('question-number');
const progressEl = document.getElementById('progress');
const timerEl = document.getElementById('timer');
const reviewBtn = document.getElementById('reviewBtn');
const restartBtn = document.getElementById('restartBtn');
const backToResultsBtn = document.getElementById('backToResultsBtn');
const reviewList = document.getElementById('review-list');
const scoreDisplay = document.getElementById('score-display');
const timeTaken = document.getElementById('time-taken');
const resultsSummary = document.getElementById('results-summary');
const mediaContainer = document.getElementById('media-container'); // Add a container for media
const historyBtn = document.getElementById('historyBtn'); 
const historyContainer = document.getElementById('history-container'); 
const closeHistoryBtn = document.createElement('button');  // 關閉按鈕
const homeBtn = document.getElementById('homeBtn'); // "回到首頁" 按鈕的 DOM 元素
const homeBtnFromResults = document.getElementById('homeBtnFromResults'); // "回到首頁" 按鈕 (results 頁面)
const jumpToSelect = document.getElementById('jumpToSelect');
const jumpBtn = document.getElementById('jumpBtn');
const jumpControls = document.querySelector('.jump-controls');
const jumpToInput = document.getElementById('jumpToInput'); // 輸入框參照
const jumpErrorMsg = document.getElementById('jumpErrorMsg'); // 錯誤訊息參照
const markBtn = document.getElementById('markBtn'); // 標記按鈕
const markedQuestionsContainer = document.getElementById('marked-questions-container'); // 標記容器
const markedQuestionsList = document.getElementById('marked-questions-list'); // 標記列表
const jumpMarkControls = document.querySelector('.jump-mark-controls'); // 包裹跳題和標記的容器


// 事件回傳器
startBtn.addEventListener('click', startQuiz);
prevBtn.addEventListener('click', goToPreviousQuestion);
nextBtn.addEventListener('click', goToNextQuestion);
submitBtn.addEventListener('click', submitQuiz);
reviewBtn.addEventListener('click', showReview);
restartBtn.addEventListener('click', restartQuiz);
backToResultsBtn.addEventListener('click', backToResults);
closeHistoryBtn.textContent = '關閉';
closeHistoryBtn.id = 'closeHistoryBtn';  // 設定 ID，方便 CSS 設定樣式
closeHistoryBtn.addEventListener('click', closeHistory);
historyBtn.addEventListener('click', loadHistory); 
homeBtn.addEventListener('click', goHome); 
homeBtnFromResults.addEventListener('click', goHome); // 事件監聽器 (results 頁面)
markBtn.addEventListener('click', toggleMarkQuestion); // 標記按鈕的事件監聽
jumpBtn.addEventListener('click', handleJump); // 跳題按鈕的事件監聽

// 從題庫中隨機抽取40題，如果題目數量不足40，則返回所有題目
function getRandomQuestions(count) {
    // 合併之前定義的題目數據和新增的題目
    const allQuestions = [...questionDatabase, ...additionalQuestions];

    // 如果題目數量不足count，直接返回所有題目
    if (allQuestions.length <= count) {
        return [...allQuestions];
    }

    // 否則隨機抽取count個題目
    const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

// 測驗開始
function startQuiz() {
    welcomeScreen.classList.add('hidden');
    quizContainer.classList.remove('hidden');
    resultsContainer.classList.add('hidden');
    reviewContainer.classList.add('hidden');
    historyContainer.classList.add('hidden'); // 隱藏歷史紀錄

    startBtn.classList.add('hidden');   // 隱藏「開始測驗」
    homeBtn.classList.remove('hidden'); // 顯示「回到首頁」
    if (jumpMarkControls) jumpMarkControls.classList.remove('hidden'); // 顯示跳題和標記的父容器

    // 隨機抽取40題，或所有可用題目（如果少於40題）
    quizQuestions = getRandomQuestions(40);
    populateJumpDropdown();
    currentQuestionIndex = 0;
    userAnswers = Array(quizQuestions.length).fill(null);
    markedQuestions.clear(); // 清除上一輪的標記
    updateMarkedQuestionsDisplay(); // 初始化標記列表顯示 (應為隱藏)

    // 更新進度顯示
    progressEl.textContent = `0 / ${quizQuestions.length}`;

    // 開始計時(在問題顯示後才開始計時, 並設定初始值)
    startTime = new Date();
    totalSeconds = 15 * 60; // 設定為 15 分鐘
    startTimer();   // 確保在設定完 totalSeconds 後才呼叫 startTimer

    startBtn.innerHTML = "<b>重新測驗</b>"; //將 "測驗開始" 按鈕文字改成 "重新測驗"
    timerEl.textContent = 'Time limit: 15:00'; // 重置顯示

    // 顯示第一題
    showQuestion(currentQuestionIndex);
    updateProgress();
}

// 遞迴函數來處理嵌套的 media.data
function renderMedia(container, data) { 
    const table = document.createElement('table');
    data.forEach(item => {
        if (Array.isArray(item)) {
            if (Array.isArray(item[0])) { // 檢查是否為嵌套陣列
                item.forEach(rowData => {
                    const row = document.createElement('tr');
                    rowData.forEach(cellData => {
                        const cell = document.createElement('td');
                        cell.innerHTML = cellData;  // 使用 innerHTML
                        row.appendChild(cell);
                    });
                    table.appendChild(row);
                });
            } else { // 處理非嵌套陣列 (例如: ["資料表emp如下:"])
              const row = document.createElement('tr');
              const cell = document.createElement('td');
              cell.innerHTML = item[0]; // 使用 innerHTML
              row.appendChild(cell);
              table.appendChild(row);
            }

        } else {
            const textDiv = document.createElement('div');
            textDiv.textContent = item;
            container.appendChild(textDiv);
        }
    });
    container.appendChild(table);
}

// 填充跳題下拉選單 (顯示數字 1-50)
function populateJumpDropdown() {
    if (!jumpToSelect) return; // 安全檢查
    jumpToSelect.innerHTML = ''; // 清空舊選項
    quizQuestions.forEach((_, index) => { // 只需索引
        const option = document.createElement('option');
        option.value = index; // 儲存 0-based 索引
        option.textContent = index + 1; // 顯示 1-based 題號
        jumpToSelect.appendChild(option);
    });
}

// 處理跳題邏輯 (輸入框優先，非阻塞錯誤)
function handleJump() {
    // 在開始處理前清除上一次的錯誤訊息
    if (jumpErrorMsg) {
        jumpErrorMsg.textContent = ''; // 清空文字
        jumpErrorMsg.style.display = 'none'; // 隱藏元素
    }

    let targetIndex = -1;

    // 1. 優先處理輸入框
    const inputValue = jumpToInput ? jumpToInput.value.trim() : '';
    if (inputValue !== '') {
        const inputNumber = parseInt(inputValue, 10);
        if (!isNaN(inputNumber) && inputNumber >= 1 && inputNumber <= quizQuestions.length) {
            targetIndex = inputNumber - 1;
        } else {
            // --- 使用頁面元素顯示錯誤 ---
            if (jumpErrorMsg) {
                jumpErrorMsg.textContent = `請輸入 1 到 ${quizQuestions.length} 之間的有效題號！`;
                jumpErrorMsg.style.display = 'inline'; // 或 'block'
            }
            // --- 結束錯誤顯示 ---
            if (jumpToInput) {
                jumpToInput.focus();
                jumpToInput.select();
            }
            return; // 停止後續處理
        }
    } else if (jumpToSelect) {
        // 2. 如果輸入框為空，則使用下拉選單的選擇
        const selectedDropdownIndex = parseInt(jumpToSelect.value, 10);
         if (!isNaN(selectedDropdownIndex) && selectedDropdownIndex >= 0 && selectedDropdownIndex < quizQuestions.length) {
             targetIndex = selectedDropdownIndex;
        }
    }

    // 如果找到了有效的目標索引
    if (targetIndex !== -1) {
        currentQuestionIndex = targetIndex;
        showQuestion(currentQuestionIndex);
        if (jumpToInput) jumpToInput.value = ''; // 成功跳轉後清空輸入框
         // 如果是透過下拉選單成功跳轉，也要清除可能存在的錯誤訊息
        if (jumpErrorMsg && inputValue === '') {
            jumpErrorMsg.textContent = '';
            jumpErrorMsg.style.display = 'none';
        }
    } else if (inputValue === '' && targetIndex === -1) {
        // 處理輸入框為空且下拉選單也無效的情況
        if (jumpErrorMsg) {
            jumpErrorMsg.textContent = "請選擇或輸入要跳轉的題號。";
            jumpErrorMsg.style.display = 'inline'; // 或 'block'
        }
    }
}

// 在 showQuestion 中
function showQuestion(index) {
    const question = quizQuestions[index];  // 取得當前題目
    questionNumber.textContent = `題目 ${index + 1} / ${quizQuestions.length}`;
    questionText.textContent = question.question;

    // 更新跳題下拉選單的當前選項
    if (jumpToSelect) {
        jumpToSelect.value = index; // 同步下拉選單的值
    }

    // 設置題目類型標籤
    if (question.type === 'single') {
        questionType.textContent = '單選題';
        questionType.className = 'question-tag single-choice';
    } else {
        questionType.textContent = '複選題';
        questionType.className = 'question-tag multiple-choice';
    }

     // Clear previous media content
    if (mediaContainer) {
      mediaContainer.innerHTML = '';
    }

    // Display media if present
    if (question.media && question.media.type === 'table') {
        renderMedia(mediaContainer, question.media.data); // 呼叫 renderMedia
    }
    
    // 清空選項內容
    optionsContainer.innerHTML = '';

    // 添加選項
    question.options.forEach((option, optIndex) => {
        const optionEl = document.createElement('div');
        optionEl.className = 'option';

        const inputType = question.type === 'single' ? 'radio' : 'checkbox';

        // 檢查使用者是否已選擇該選項
        const isSelected = userAnswers[index] && userAnswers[index].includes(option.value);
        if (isSelected) {
            optionEl.classList.add('selected');
        }

        optionEl.innerHTML = `
            <input type="${inputType}" name="question${index}" value="${option.value}" ${isSelected ? 'checked' : ''}>
            <span class="option-text">${option.value}. ${option.label}</span>
        `;

        // 添加點擊事件
        optionEl.addEventListener('click', function() {
            const input = this.querySelector('input');

            if (question.type === 'single') {
                // 對於單選題，取消所有其他選項的選中狀態
                document.querySelectorAll('.option').forEach(opt => {
                    opt.classList.remove('selected');
                });
                // 選中當前選項
                this.classList.add('selected');
                userAnswers[index] = [input.value];
                input.checked = true;
            } else {
                // 對於多選題，切換當前選項的選中狀態
                this.classList.toggle('selected');
                input.checked = !input.checked;

                // 更新使用者答案
                if (!userAnswers[index]) {
                    userAnswers[index] = [];
                }

                if (input.checked) {
                    userAnswers[index].push(input.value);
                } else {
                    userAnswers[index] = userAnswers[index].filter(val => val !== input.value);
                }
            }

            // 更新進度（可能有新回答的題目）
            updateProgress();
        });

        optionsContainer.appendChild(optionEl);
    });

    // 更新按鈕狀態
    prevBtn.disabled = index === 0;
    nextBtn.disabled = index === quizQuestions.length - 1;

    // 始終顯示 submitBtn
    submitBtn.classList.remove('hidden');
    // 更新標記按鈕狀態
    updateMarkButtonState();
    // 更新標記題目列表顯示
    updateMarkedQuestionsDisplay();

    console.log(currentQuestionIndex);  // 偵錯訊息
}

// 切換標記問題
function toggleMarkQuestion() {
    const index = currentQuestionIndex;
    if (markedQuestions.has(index)) {
        markedQuestions.delete(index);
    } else {
        markedQuestions.add(index);
    }
    updateMarkButtonState(); // 更新按鈕文字/樣式
    updateMarkedQuestionsDisplay(); // 更新列表顯示
}

// 更新標記按鈕的文字和樣式
function updateMarkButtonState() {
    if (markedQuestions.has(currentQuestionIndex)) {
        markBtn.innerHTML = '<b>取消標記</b>';
        markBtn.classList.add('marked'); // 添加樣式 class
    } else {
        markBtn.innerHTML = '<b>標記此題</b>';
        markBtn.classList.remove('marked'); // 移除樣式 class
    }
}

// 更新已標記題目的顯示列表
function updateMarkedQuestionsDisplay() {
    markedQuestionsList.innerHTML = ''; // 清空現有列表

    if (markedQuestions.size === 0) {
        markedQuestionsContainer.classList.add('hidden'); // 如果沒有標記，隱藏容器
        return;
    }

    markedQuestionsContainer.classList.remove('hidden'); // 如果有標記，顯示容器

    // 將 Set 轉換為陣列並排序，以便按順序顯示
    const sortedMarkedIndices = Array.from(markedQuestions).sort((a, b) => a - b);

    sortedMarkedIndices.forEach(index => {
        const button = document.createElement('button');
        button.textContent = index + 1; // 顯示 1-based 題號
        button.className = 'marked-question-button';
        button.dataset.index = index; // 儲存 0-based 索引

        button.addEventListener('click', function() {
            const targetIndex = parseInt(this.dataset.index, 10);
            if (!isNaN(targetIndex) && targetIndex >= 0 && targetIndex < quizQuestions.length) {
                currentQuestionIndex = targetIndex;
                showQuestion(currentQuestionIndex);
                 // 清除跳題輸入框和錯誤訊息 (如果有的話)
                 if (jumpToInput) jumpToInput.value = '';
                 if (jumpErrorMsg) {
                    jumpErrorMsg.textContent = '';
                    jumpErrorMsg.style.display = 'none';
                }
            }
        });

        markedQuestionsList.appendChild(button);
    });
}

// showReview
function showReview() {
    resultsContainer.classList.add('hidden');
    reviewContainer.classList.remove('hidden');

    // 清空原有内容
    reviewList.innerHTML = '';

    // 生成詳細答題情況
    quizQuestions.forEach((question, index) => {
        const userAnswer = userAnswers[index] || [];
        const correctAnswer = question.answer;

        // 檢查答案是否正解
        const isCorrect = userAnswer.length === correctAnswer.length &&
                         userAnswer.every(ans => correctAnswer.includes(ans));

        const reviewItem = document.createElement('div');
        reviewItem.className = `review-item ${isCorrect ? 'correct' : 'incorrect'}`;

        // 題目類型
        const typeText = question.type === 'single' ? '單選題' : '複選題';

        // 使用者選擇的答案
        const userAnswerText = userAnswer.length > 0
            ? userAnswer.join(', ')
            : '未作答';

        // 正解答案
        const correctAnswerText = correctAnswer.join(', ');

        // 建立選項的 HTML
        let optionsHTML = '<div class="review-options">';
        question.options.forEach(opt => {
            // 為每個選項創建一個容器 div，並添加 class 以便 CSS 定位
            optionsHTML += `<div class="review-option-item">`;

            // 根據題目類型決定 input type
            const inputType = question.type === 'single' ? 'radio' : 'checkbox';
            // 檢查這個選項是否是使用者選擇的答案之一
            const isUserAnswer = userAnswer.includes(opt.value);
            // 添加一個 disabled 的 input 元素來模擬方塊，並根據使用者答案設定 checked 狀態
            optionsHTML += `<input type="${inputType}" class="review-checkbox" disabled ${isUserAnswer ? 'checked' : ''}>`;

            // 1. 選項編號 (A., B., etc.)
            optionsHTML += `<span class="option-prefix">${opt.value}.</span>`;

            // 2. 選項內容 (包含文字和可能的圖片)
            optionsHTML += `<span class="option-label-content">`;
            //    使用正規表達式來分割標籤字串，並保留 <img> 標籤
            //    /(<img.*?>)/ 這個 regex 會尋找 <img> 標籤，並將其作為分割後陣列的一部分保留下來
            const labelParts = opt.label.split(/(<img.*?>)/);

            // 遍歷分割後的部分，重建內容
            labelParts.forEach(part => {
                if (part) { // 確保部分不是空的
                    if (part.startsWith('<img')) {
                        // 如果是圖片標籤，直接加入
                        optionsHTML += part;
                    } else {
                        // 如果是文字，可以選擇性地再包一層 span，或直接加入文字
                        // 直接加入文字通常足夠
                        optionsHTML += part;
                         // 或者，如果你想對文字部分單獨應用樣式：
                         // optionsHTML += `<span class="option-text-part">${part}</span>`;
                    }
                }
            });
            optionsHTML += `</div>`; // 關閉 review-option-item
        });
        optionsHTML += '</div>'; // 關閉 review-options

        // Media display (handle both table and text)
        let mediaContent = '';
        if (question.media && question.media.type === 'table') {
            mediaContent += '<table class="review-table">'; // 添加 class
            function reviewRenderMedia(data) { // 巢狀結構
                data.forEach(item => {
                    if (Array.isArray(item)) {
                        if (Array.isArray(item[0])) { // 2D array (table rows)
                            item.forEach(rowData => {
                                mediaContent += '<tr>';
                                rowData.forEach(cellData => {
                                    mediaContent += `<td>${cellData}</td>`;
                                });
                                mediaContent += '</tr>';
                            });
                        } else { // 1D array (table row)
                           mediaContent += '<tr>';
                            item.forEach(cellData => {
                                mediaContent += `<td>${cellData}</td>`;
                            });
                            mediaContent += "</tr>";
                        }
                    } else {
                        mediaContent += `<div>${item}</div>`; // Render as simple text
                    }
                });
            }

            reviewRenderMedia(question.media.data);
            mediaContent += '</table>';
        }

        // 組合 HTML
        reviewItem.innerHTML = `
            <div class="review-question">${index + 1}. [${typeText}] ${question.question}</div>
            ${mediaContent}
            <div class="review-answers">
                <div>選項：</div>
                ${optionsHTML}
                <div>你的答案：<span class="user-answer">${userAnswerText}</span></div>
                <div>正確答案：<span class="correct-answer">${correctAnswerText}</span></div>
            </div>
            <div>${isCorrect ? '✓ 正確' : '✗ 錯誤'}</div>
        `;

        reviewList.appendChild(reviewItem);
    });
}

// 更新進度顯示
function updateProgress() {
    const answeredCount = userAnswers.filter(answer => answer !== null && answer.length > 0).length;
    progressEl.textContent = `Questions: ${answeredCount}/${quizQuestions.length}`;
}

// 下一題
function goToNextQuestion() {
    if (currentQuestionIndex < quizQuestions.length - 1) {
        currentQuestionIndex++;
        showQuestion(currentQuestionIndex);
    }
}

// 上一題
function goToPreviousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion(currentQuestionIndex);
    }
}


// 計時器
function startTimer() {
    if (timerInterval) {  // 如果已經有計時器在運行，先清除它
        clearInterval(timerInterval);
    }
    let totalSeconds = 15 * 60; // 每次開始計時都重置為 15 分鐘
    timerInterval = setInterval(function() {
        totalSeconds--;  // 每秒減1
        //計算 "分" 和 "秒"
        const minutes = Math.floor(totalSeconds / 60).toString().padStart(2, '0');
        const seconds = (totalSeconds % 60).toString().padStart(2, '0');
        timerEl.textContent = `Time limit: ${minutes}:${seconds}`;

        if (totalSeconds <= 0) {
            // 時間到，停止計時器並提交答案
            stopTimer();
            submitQuiz();
        }
    }, 1000);
}

// 停止計時器
function stopTimer() {
    clearInterval(timerInterval);
    timerInterval = null; // 清除 timerInterval，表示沒有計時器在運行
}

// 提交測試
function submitQuiz() {
    stopTimer();

    // 計算得分
    let correctCount = 0;
    quizQuestions.forEach((question, index) => {
        const userAnswer = userAnswers[index] || [];
        const correctAnswer = question.answer;
        if (userAnswer.length === correctAnswer.length && userAnswer.every(ans => correctAnswer.includes(ans))) {
            correctCount++;
        }
    });

    const score = Math.round((correctCount / quizQuestions.length) * 100);

    // 計算用時
    const endTime = new Date();
    const timeDiff = Math.floor((endTime - startTime) / 1000); // 秒
    const minutes = Math.floor(timeDiff / 60);
    const seconds = timeDiff % 60;

    // 顯示结果
    quizContainer.classList.add('hidden');
    resultsContainer.classList.remove('hidden');

    scoreDisplay.textContent = `得分: ${score}% (${correctCount}/${quizQuestions.length})`;
    timeTaken.textContent = `用時: ${minutes}分${seconds}秒`;

    // 生成總分訊息
    let summaryText = '';
    if (score >= 90) {
        summaryText = '這波簡直太神了啦！';
    } else if (score >= 70) {
        summaryText = '通過邊緣繼續保持！';
    } else if (score >= 60) {
        summaryText = '就差那麼一點點啊！';
    } else {
        summaryText = '你真他喵的爛透了!';
    }

    resultsSummary.textContent = summaryText;

    // 儲存測驗結果到 localStorage (保留自動刪除最舊紀錄的邏輯)
    const quizResult = {
        score: score,
        time: `${minutes}分${seconds}秒`,
        questions: quizQuestions,  // 儲存問題
        userAnswers: userAnswers, // 儲存使用者答案
        date: new Date().toLocaleString() // 儲存測驗日期和時間
    };

    let history = JSON.parse(localStorage.getItem('quizHistory_net') || '[]'); // 讀取歷史紀錄
    history.push(quizResult); // 加入新的結果

    // 限制歷史紀錄數量 (最多 20 筆)
    if (history.length > 20) {
        history.shift(); // 移除最舊的紀錄
    }

    localStorage.setItem('quizHistory_net', JSON.stringify(history)); // 儲存回 localStorage
}

// 返回结果頁面
function backToResults() {
    reviewContainer.classList.add('hidden');
    resultsContainer.classList.remove('hidden');
}

// 重新開始測試
function restartQuiz() {
    resultsContainer.classList.add('hidden');
    quizQuestions = [];
    currentQuestionIndex = 0;
    userAnswers = [];
    startQuiz();  // 重新開始測驗
}

// 載入並顯示歷史紀錄
function loadHistory() {
    welcomeScreen.classList.add('hidden');
    quizContainer.classList.add('hidden');
    resultsContainer.classList.add('hidden');
    reviewContainer.classList.add('hidden');
    historyContainer.classList.remove('hidden');    // 顯示歷史紀錄容器
    historyContainer.innerHTML = '<h2>歷史記錄</h2>';   // 清空並添加標題

    const history = JSON.parse(localStorage.getItem('quizHistory_net') || '[]');

    if (history.length === 0) {
        historyContainer.innerHTML += '<p>目前沒有任何記錄</p>';
        historyContainer.appendChild(closeHistoryBtn);  //加入關閉按鈕
        return;
    }
    // 正序迴圈
    for (let i = 0; i < history.length; i++) { // 改為正序遍歷
        const result = history[i];
        const resultDiv = document.createElement('div');
        resultDiv.className = 'history-item';

        // 將原本的 innerHTML 放入一個新的 div 內，並給予 class name
        const innerContentDiv = document.createElement('div');
        resultDiv.className = 'history-item';
        resultDiv.innerHTML = `
            <p><strong>測驗時間：</strong>${result.date}</p>
            <p><strong>得分：</strong>${result.score}%</p>
            <p><strong>用時：</strong>${result.time}</p>
            <button class="review-history-btn" data-index="${i}">查看詳情</button>
            <button class="delete-history-btn" data-index="${i}">刪除</button> 
        `;
        // 將新的 div 插入到 resultDiv
        resultDiv.appendChild(innerContentDiv);
        historyContainer.appendChild(resultDiv);
    }
    // 加入關閉按鈕.
    historyContainer.appendChild(closeHistoryBtn);

    // 添加事件監聽器到 "查看詳情" 按鈕
    document.querySelectorAll('.review-history-btn').forEach(button => {
        button.addEventListener('click', function() {
            const index = parseInt(this.dataset.index, 10);
            showReviewFromHistory(index);
        });
    });

    // 刪除按鈕的事件監聽器
    document.querySelectorAll('.delete-history-btn').forEach(button => {
        button.addEventListener('click', function() {
            const index = parseInt(this.dataset.index, 10); // 取得按鈕上的 data-index (正序)
            deleteHistoryItem(index); // 傳遞正序的 index
        });
    });
}

// 關閉歷史紀錄
function closeHistory() {
    historyContainer.classList.add('hidden');
    welcomeScreen.classList.remove('hidden'); // 回到歡迎畫面
    
    // 停止計時器並重置顯示
    stopTimer();    
    timerEl.textContent = 'Time limit: 15:00'; // 重置顯示

    // 檢查是否在測驗中
    if (quizContainer.classList.contains('hidden')) {
        // 不在測驗中，將按鈕文字設為 "測驗開始"
        startBtn.innerHTML = "<b>測驗開始</b>";
    }else{
        startBtn.innerHTML = "<b>重新測驗</b>";
    }
}

// 從歷史紀錄中顯示答題詳情
function showReviewFromHistory(historyIndex) {
    const history = JSON.parse(localStorage.getItem('quizHistory_net') || '[]');
    const result = history[historyIndex];

    // 將歷史資料設定到全域變數，讓 showReview 函數可以使用
    quizQuestions = result.questions;
    userAnswers = result.userAnswers;
    currentQuestionIndex = 0; // 重置題目索引

    // 切換到答題詳情頁面
    historyContainer.classList.add('hidden');
    reviewContainer.classList.remove('hidden');
    showReview(); // 呼叫原本的 showReview 函數
}

// 刪除歷史紀錄的函數
function deleteHistoryItem(index) {
    let history = JSON.parse(localStorage.getItem('quizHistory_net') || '[]');
    history.splice(index, 1); // 直接使用 splice 刪除指定索引的元素 (正序索引)
    localStorage.setItem('quizHistory_net', JSON.stringify(history));
    loadHistory(); // 重新載入歷史紀錄
}

// 回到首頁
function goHome() {
    // 隱藏所有非首頁的區塊
    quizContainer.classList.add('hidden');
    resultsContainer.classList.add('hidden');
    reviewContainer.classList.add('hidden');
    historyContainer.classList.add('hidden');
    // 顯示首頁
    welcomeScreen.classList.remove('hidden');
    // 顯示開始按鈕, 隱藏回首頁按鈕
    startBtn.classList.remove('hidden');
    homeBtn.classList.add('hidden');
    if (jumpMarkControls) jumpMarkControls.classList.add('hidden'); // 隱藏跳題和標記的父容器

    // 重置計時器和相關變數
    stopTimer(); // 停止計時器
    //totalSeconds = 0;  //不需要設定為0 
    timerEl.textContent = 'Time limit: 15:00'; // 重置顯示
    currentQuestionIndex = 0;
    userAnswers = [];
    markedQuestions.clear(); // 清除標記
    updateMarkedQuestionsDisplay(); // 更新標記列表顯示 (應為隱藏)
    //quizQuestions = [];  // 不需要了， 因為每次都會重新開始
    updateProgress(); // 更新進度
    startBtn.innerHTML = "<b>測驗開始</b>"; // 回到首頁後, 將 "重新測驗" 按鈕文字改回 "測驗開始"
    // 新增: 重置標記按鈕狀態
    markBtn.innerHTML = '<b>標記此題</b>';
    markBtn.classList.remove('marked');
}

if (jumpBtn) { // 檢查按鈕是否存在
    jumpBtn.addEventListener('click', handleJump);
}
// ===== 新增輸入框 Enter 和 input 事件 ===== //
if (jumpToInput) { // 檢查輸入框是否存在
    jumpToInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            handleJump();
        }
    });
    // 當使用者在輸入框輸入時清除錯誤訊息
    jumpToInput.addEventListener('input', () => {
        if (jumpErrorMsg && jumpErrorMsg.textContent !== '') {
            jumpErrorMsg.textContent = '';
            jumpErrorMsg.style.display = 'none';
        }
    });
}

// 綁定歷史紀錄
historyBtn.addEventListener('click', loadHistory);