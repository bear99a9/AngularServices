export class AccountsService {
    accounts = [
        {
            name: 'Master Account',
            status: 'active'
        },
        {
            name: 'Test account',
            status: 'inactive'
        },
        {
            name: 'Hidden Account',
            status: 'unknown'
        }
    ];

    constructor() { }

    addAccount(name: string, status: string) {
        this.accounts.push({ name: name, status: status });
    }

    UpdateStatus(id: number, status: string) {
        this.accounts[id].status = status;
    }
}