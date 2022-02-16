class ApiFeatures {
    constructor(query, queryStr){
        this.query = query;   
        this.queryStr = queryStr;  
    }

    //! Search
    search(){
        const keyword = this.queryStr.keyword ? {
            name:{
                $regex: this.queryStr.keyword,
                $options: 'i', //? case insensitive
            },
        } : {}

        // console.log(keyword);

        this.query = this.query.find({...keyword});
        return this;
    }


    //! Filter
    filter(){
        const queryCopy = {...this.queryStr};

        //? Remove the fields from query
        const removeFields = ['page', 'sort', 'limit', 'fields', 'keyword'];
        removeFields.forEach(key => delete queryCopy[key]);

        //? Filter for price and rating
        let queryStr = JSON.stringify(queryCopy);
        queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, key => `$${key}`);

        this.query = this.query.find(JSON.parse(queryStr));
        // console.log(queryStr);
        return this;
    }


    //! Pagination
    pagination(resultPerPage){
        const currentPage = Number(this.queryStr.page) || 1;
        const skip = (currentPage - 1) * resultPerPage;

        this.query = this.query.limit(resultPerPage).skip(skip);
        return this;
    }

};

module.exports = ApiFeatures;