export const productMixin = {
    data(){
        return{
          products: ["Monitör", "Klavye", "Mouse", "Disk"],
          searchText: "",
        }
      },
      computed: {
        filtered(){
          return this.products.filter((element) => {
            return element.match(this.searchText);
          })
        }
      }
}