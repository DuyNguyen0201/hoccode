export interface BudgetTemplate { // mẫu ngân sách 
    id: string
    userId: string
    categoryId: string
    monthlyAmount: number       // số tiền ngân sách hàng tháng 
    alertThreshold: number | null   // ngưỡng cảnh báo 
    active: boolean    // kích hoạt boolean:true=đang dùng,false=tạm ngưng 
    createdAt: string
    updatedAt: string
  }
  
  export interface BudgetPeriod {    // kỳ ngân sách cụ thể
    id: string
    userId: string
    categoryId: string
    periodStart: string     // ngày bắt đầu và kết thúc kì 
    periodEnd: string
    periodAmount: number
    spentAmount: number    // số tiền đã chi tiêu trong kì(tính từ tất cả expenses)
    percentageUsed: number
    isOverBudget: boolean    // là boolean nếu spentamount>periodamount(vượt ngân sách)
    remaining: number
    alertThreshold: number | null
    createdAt: string
    updatedAt: string
  }
  
  export interface CreateBudgetTemplateData {
    categoryId: string
    monthlyAmount: number
    alertThreshold?: number
    active?: boolean    // ? = tuỳ chọn nếu không nhập sẽ dùng giá trị mặc định từ be
  }
  
  export interface UpdateBudgetTemplateData {    // tất cả đều là tuỳ chọn vì khi cập nhật chỉ cần thay đổi 1 trong số đó
    monthlyAmount?: number
    alertThreshold?: number
    active?: boolean   
  }
  
  export interface BudgetPeriodFilter {    // bộ lọc 
    month?: string
    categoryId?: string
    startDate?: string
    endDate?: string
  }
  
  export interface CategoryBudgetSummary {    // tổng kết từng danh mục 
    categoryId: string
    categoryName: string
    periodAmount: string
    spentAmount: string
    percentageUsed: number
    isOverBudget: boolean
    remaining: string
  }
  
  export interface CurrentMonthSummary {   // tổng kết tháng 
    month: string
    totalBudget: string
    totalSpent: string
    percentageUsed: number
    categories: CategoryBudgetSummary[]
  }
