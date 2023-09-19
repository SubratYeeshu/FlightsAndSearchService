class CrudService{
    constructor(repository){
        this.repository = repository;
    }

    async create(data){
        try {
            const resonse = await this.repository.create(data);
            return resonse;
        } catch (error) {
            console.log("Something went wrong at CRUD service");
            throw {error};
        }
    }

    async destroy(id){
        try {
            await this.repository.destroy(id);
            return true;
        } catch (error) {
            console.log("Something went wrong at CRUD service");
            throw {error};
        }
    }

    async get(id){
        try {
            const result = await this.repository.get(id);
            return result;
        } catch (error) {
            console.log("Something went wrong at CRUD service");
            throw {error};
        }
    }

    async getAll(){
        try {
            const result = await this.repository.getAll();
            return result;
        } catch (error) {
            console.log("Something went wrong at CRUD service");
            throw {error};
        }
    }

    async update(id, data){
        try {
            const result = await this.repository.update(id, data);
            return result;
        } catch (error) {
            console.log("Something went wrong at CRUD service");
            throw {error};
        }
    }
}

module.exports = CrudService;