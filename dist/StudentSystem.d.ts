export declare let courses: string[];
export type StdInfo = {
    enrollNo: number;
    id: string;
    name: string;
    coursesEnrolled: string[];
    paidFee: boolean;
    balance: number;
};
export declare class StudentMSystem {
    studentList: StdInfo[];
    addStudent(std: StdInfo): void;
    enrollStd(enrollNo: number, course: string): void;
    viewBalance(enrollNo: number): void;
    payFee(enrollNo: number): void;
    showStatus(enrollNo: number): void;
    logIn(enrNO: number, id: string): void;
}
