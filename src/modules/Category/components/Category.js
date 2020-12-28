import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { Icon } from 'antd';
import container from '../container';
import './CategoryStyle.scss';
import { MESSAGE_TYPE } from '../../../constants/globalConstants';
import { Modal, Input } from 'antd';


class Category extends Component {
  // Life Cycle Methods
  constructor(props) {
    super(props);
    this.state = {
      isCreateCategoryModalVisible: false,
      isUpdateCategoryModalVisible: false,
      isDeleteCategoryModalVisible: false,
      isCreateSubCategoryModalVisible: false,
      isUpdateSubCategoryModalVisible: false,
      isDeleteSubCategoryModalVisible: false,
      visible: false,
      catName: '',
      subCatName: '',
      objCat: {},
      objSubCat: {},
      contextMenuPostion: {
        top: 0,
        left: 0,
        obj: {},
        objSubCat: {}
      }
    };

    this.onUpdateCategory = this.onUpdateCategory.bind(this);
    this.onDeleteCategory = this.onDeleteCategory.bind(this);
    this.handleContextMenu = this.handleContextMenu.bind(this);
    this.hideShowcontentData = this.hideShowcontentData.bind(this);
    this.expandCollapseAllData = this.expandCollapseAllData.bind(this);
  }


  createCategoryModal(){
    return (
    <Modal title="Create Category" visible={this.state.isCreateCategoryModalVisible} onOk={() => this.props.createCategoryApiCall({
      createCategoryCallBack: (obj) => {
        if(obj.isSuccess){
          this.props.showToast({
            type: MESSAGE_TYPE.SUCCESS,
            title: 'Success',
            description: obj.message,
          });
          this.setState({
            isCreateCategoryModalVisible: false,
            catName: '',
          })
        }else {
          this.props.showToast({
            type: MESSAGE_TYPE.ERROR,
            title: 'Failure',
            description: 'Category is not created because of some issue.',
          });
      }},
      name: this.state.catName
    })} onCancel={() => {
      this.setState({
        isCreateCategoryModalVisible: false,
        catName: '',
      })
    }}>
        <div>
          <span>Category Name: </span>
          <Input placeholder="Enter Category Name" onChange={e => this.setState({ catName: e.target.value })}/> 
        </div>    
    </Modal>
    );
  }

  deleteCategoryModal(){
    return (
    <Modal title="Delete Category" visible={this.state.isDeleteCategoryModalVisible} okText="Delete" onOk={() => this.props.deleteCategoryApiCall({
      deleteCategoryCallBack: (obj) => {
        if(obj.isSuccess){
          this.props.showToast({
            type: MESSAGE_TYPE.SUCCESS,
            title: 'Success',
            description: obj.message,
          });
          this.setState({
            isDeleteCategoryModalVisible: false,
            objCat: {},
          })
        }else {
          this.props.showToast({
            type: MESSAGE_TYPE.ERROR,
            title: 'Failure',
            description: 'Category is not deleted because of some issue.',
          });
      }},
      cat_id: this.state.objCat.id
    })} onCancel={() => {
      this.setState({
        isDeleteCategoryModalVisible: false,
        objCat: {}
      })
    }}>
        <div>
          Are you sure you want to delete {this.state.objCat.name} ?
        </div>    
    </Modal>
    );
  }

  updateCategoryModal(){
    return (
    <Modal title={`Update ${this.state.objCat.name} category`} visible={this.state.isUpdateCategoryModalVisible} okText="Update" onOk={() => this.props.editCategoryApiCall({
      updateCategoryCallBack: (obj) => {
        if(obj.isSuccess){
          this.props.showToast({
            type: MESSAGE_TYPE.SUCCESS,
            title: 'Success',
            description: obj.message,
          });
          this.setState({
            isUpdateCategoryModalVisible: false,
            objCat: {},
            catName: ''
          })
        }else {
          this.props.showToast({
            type: MESSAGE_TYPE.ERROR,
            title: 'Failure',
            description: obj.message || 'Category is not updated because of some issue.',
          });
      }},
      cat_id: this.state.objCat.id,
      name: this.state.catName
    })} onCancel={() => {
      this.setState({
        isUpdateCategoryModalVisible: false,
        objCat: {},
        catName: ''
      })
    }}>
        <div>
          <span>Update Category Name: </span>
          <Input value={this.state.catName} placeholder="Update Category Name" onChange={e => this.setState({ catName: e.target.value })}/> 
        </div>    
    </Modal>
    );
  }

  createSubCategoryModal(){
    return (
    <Modal title={`Create Sub Category for ${this.state.objCat.name}`} visible={this.state.isCreateSubCategoryModalVisible} onOk={() => this.props.createSubCategoryApiCall({
      createSubCategoryCallBack: (obj) => {
        if(obj.isSuccess){
          this.props.showToast({
            type: MESSAGE_TYPE.SUCCESS,
            title: 'Success',
            description: obj.message,
          });
          this.setState({
            isCreateSubCategoryModalVisible: false,
            subCatName: '',
            objCat: {}
          })
        }else {
          this.props.showToast({
            type: MESSAGE_TYPE.ERROR,
            title: 'Failure',
            description: obj.message ? obj.message : 'Sub category is not created because of some issue.',
          });
      }},
      name: this.state.subCatName,
      cat_id: this.state.objCat.id
    })} onCancel={() => {
      this.setState({
        isCreateSubCategoryModalVisible: false,
        subCatName: '',
        objCat: {}
      })
    }}>
        <div>
          <span>Sub Category Name: </span>
          <Input value={this.state.subCatName} placeholder="Enter Sub Category Name" onChange={e => this.setState({ subCatName: e.target.value })}/> 
        </div>
        <div>
          <span>For Category: </span>
          <Input value={this.state.objCat.name} disabled/> 
        </div>        
    </Modal>
    );
  }

  updateSubCategoryModal(){
    return (
    <Modal title={`Update ${this.state.objSubCat.sub_cate_name} Sub Category for ${this.state.objCat.name}`} visible={this.state.isUpdateSubCategoryModalVisible} okText="Update" onOk={() => this.props.updateSubCategoryApiCall({
      updateSubCategoryCallBack: (obj) => {
        if(obj.isSuccess){
          this.props.showToast({
            type: MESSAGE_TYPE.SUCCESS,
            title: 'Success',
            description: obj.message,
          });
          this.setState({
            isUpdateSubCategoryModalVisible: false,
            subCatName: '',
            objCat: {},
            objSubCat: {}
          })
        }else {
          this.props.showToast({
            type: MESSAGE_TYPE.ERROR,
            title: 'Failure',
            description: obj.message ? obj.message : 'Sub category is not created because of some issue.',
          });
      }},
      name: this.state.subCatName,
      sub_cat_id: this.state.objSubCat.sub_cat_id
    })} onCancel={() => {
      this.setState({
        isUpdateSubCategoryModalVisible: false,
        subCatName: '',
        objCat: {},
        objSubCat: {}
      })
    }}>
        <div>
          <span>Sub Category Name: </span>
          <Input value={this.state.subCatName} placeholder="Enter Sub Category Name" onChange={e => this.setState({ subCatName: e.target.value })}/> 
        </div>
        <div>
          <span>For Category: </span>
          <Input value={this.state.objCat.name} disabled/> 
        </div>        
    </Modal>
    );
  }

  deleteSubCategoryModal(){
    return (
    <Modal title={`delete ${this.state.objSubCat.sub_cate_name} Sub Category for ${this.state.objCat.name}`} visible={this.state.isDeleteSubCategoryModalVisible} okText="Delete" onOk={() => this.props.deleteSubCategoryApiCall({
      deleteSubCategoryCallBack: (obj) => {
        if(obj.isSuccess){
          this.props.showToast({
            type: MESSAGE_TYPE.SUCCESS,
            title: 'Success',
            description: obj.message,
          });
          this.setState({
            isDeleteSubCategoryModalVisible: false,
            subCatName: '',
            objCat: {},
            objSubCat: {}
          })
        }else {
          this.props.showToast({
            type: MESSAGE_TYPE.ERROR,
            title: 'Failure',
            description: obj.message ? obj.message : 'Sub category is not deleted because of some issue.',
          });
      }},
      sub_cat_id: this.state.objSubCat.sub_cat_id
    })} onCancel={() => {
      this.setState({
        isDeleteSubCategoryModalVisible: false,
        subCatName: '',
        objCat: {}
      })
    }}>
        <div>
          Are you sure you want to delete {this.state.objSubCat.sub_cate_name} subcategory of {this.state.objCat.name}?
        </div>      
    </Modal>
    );
  }

  onUpdateCategory(obj){
    this.setState({
      objCat: obj,
      isUpdateCategoryModalVisible: true,
      catName: obj.name
    })
  }

  onDeleteCategory(obj){
    this.setState({
      objCat: obj,
      isDeleteCategoryModalVisible: true,
    })
  }

  onUpdateSubCategory(objCat,objSubCat){
    this.setState({
      objCat,
      objSubCat,
      isUpdateSubCategoryModalVisible: true,
      subCatName: objSubCat.sub_cate_name
    })
  }

  onDeleteSubCategory(objCat,objSubCat){
    this.setState({
      objCat,
      objSubCat,
      isDeleteSubCategoryModalVisible: true,
      subCatName: objSubCat.sub_cate_name
    })
  }

  hideShowcontentData(obj){
    const arrOfCategory = this.props.arrCategoryList
    const index = arrOfCategory.findIndex(objFilter => objFilter.id === obj.id)
    arrOfCategory[index].showSubCategory = !arrOfCategory[index].showSubCategory;
    this.props.getHideShowCategory(
      arrOfCategory
    )
  }

  expandCollapseAllData(collapse){
    const arrOfCategory =  this.props.arrCategoryList.map(obj => {
      return{
        ...obj,
      showSubCategory: collapse
    }
    })
    this.props.getHideShowCategory(
      arrOfCategory
    )
  }

  handleContextMenu = (event,obj,objSubCat = {}) => {
    event.preventDefault();
    event.stopPropagation();
    
    this.setState({ visible: true });
    
    const clickX = event.clientX //+ event.target.getBoundingClientRect().left;
    const clickY = event.clientY //+ event.target.getBoundingClientRect().top;
    const screenW = window.innerWidth;
    const screenH = window.innerHeight;
    
    const rootW = 160//event.target.offsetWidth || 0;
    const rootH = 58//event.target.offsetHeight || 0;
    
    const right = (screenW - clickX) > rootW;
    const left = !right;
    const top = (screenH - clickY) > rootH;
    const bottom = !top;
    
    event.target.style.left = `${clickX + 5}px`;
    event.target.style.top = `${clickY + 5}px`;
    this.setState({
      contextMenuPostion:{
        top: clickY + 5,
        left: clickX + 5,
        obj: obj,
        objSubCat: objSubCat
      }
    })
    // if (right) {
    //   event.target.style.left = `${clickX + 5}px`;
    // }
    
    // if (left) {
    //   event.target.style.left = `${clickX - rootW - 5}px`;
    // }
    
    // if (top) {
    //   event.target.style.top = `${clickY + 5}px`;
    // }
    
    // if (bottom) {
    //   event.target.style.top = `${clickY - rootH - 5}px`;
    // }
};

_handleClick = (event) => {
  const { visible } = this.state;
  const wasOutside = !(event.target.contains === this.root);
  
  if (wasOutside && visible) this.setState(
    { 
      visible: false,
      contextMenuPostion: {
        top: 0,
        left: 0,
        obj: {},
        objSubCat: {}
      }
    });
};

_handleScroll = () => {
  const { visible } = this.state;
  
  if (visible) this.setState(
    { 
      visible: false,
      contextMenuPostion: {
        top: 0,
        left: 0,
        obj: {},
        objSubCat: {}
      }
    });
};

  render() {
    const { visible } = this.state;

    const arrCategoris = this.props.arrCategoryList.map(obj => {
      
      return <div key={obj.id} className="collapsible" onContextMenu={(e) => {this.handleContextMenu(e,obj)}} onClick={(e) => {
        e.stopPropagation();
        this.hideShowcontentData(obj)
      }}>
        <div className="title">
          <span>{obj.name}</span>
          <img src={process.env.PUBLIC_URL +  `/assets/${(obj.showSubCategory) ? 'minus.png' : 'plus.png'}`} onClick={() => this.hideShowcontentData(obj)} className="icon"/>
        </div>
        { obj.showSubCategory && 
          obj.subCategory && obj.subCategory.map(objSubCategory => {
            return <div key={objSubCategory.sub_cat_id} className="child"
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                    }}
                    onContextMenu={(e) => {
                      this.handleContextMenu(e,obj,objSubCategory)
                    }
                    }>
              {objSubCategory.sub_cate_name}
            </div>
          })
        }
        { obj.showSubCategory && 
          <div className="btnClass">
              <button onClick={() => {this.setState({ isCreateSubCategoryModalVisible: true, objCat:obj, subCatName: '' })}}> add sub-category </button>
          </div>
        }
      </div>
      })
   
    return (
      <div className="loginBody">
        
        {arrCategoris}
        { visible &&
       
       <div ref={ref => {this.root = ref}} className="contextMenu" style={{
         top: this.state.contextMenuPostion.top,
         left: this.state.contextMenuPostion.left
       }}>
        <div style={{borderBottomStyle:'groove'}}> {(this.state.contextMenuPostion.objSubCat.sub_cat_id) ? this.state.contextMenuPostion.objSubCat.sub_cate_name : this.state.contextMenuPostion.obj.name} </div>
        <div className="contextMenu--option" onClick={() => {(!this.state.contextMenuPostion.objSubCat.sub_cat_id) ? this.onUpdateCategory(this.state.contextMenuPostion.obj) : this.onUpdateSubCategory(this.state.contextMenuPostion.obj, this.state.contextMenuPostion.objSubCat)}}>Edit</div>
        <div className="contextMenu--option" onClick={() => {(!this.state.contextMenuPostion.objSubCat.sub_cat_id) ? this.onDeleteCategory(this.state.contextMenuPostion.obj) : this.onDeleteSubCategory(this.state.contextMenuPostion.obj, this.state.contextMenuPostion.objSubCat)}}>Delete</div>
      </div>
    }
        <div className="btnClass">
          <button onClick={() => {this.setState({ isCreateCategoryModalVisible: true })}}> create category </button>
          <button onClick={() => {this.expandCollapseAllData(true)}}> expand category </button>
          <button onClick={() => {this.expandCollapseAllData(false)}}> collapse category</button>
        </div>
        {this.createCategoryModal()}
        {this.updateCategoryModal()}
        {this.deleteCategoryModal()}
        {this.createSubCategoryModal()}
        {this.updateSubCategoryModal()}
        {this.deleteSubCategoryModal()}
      </div>
    );
  }

  componentDidMount() {
    this.props.defaulltEntryApiCall()
    document.addEventListener('click', this._handleClick);
    document.addEventListener('scroll', this._handleScroll);
};

  componentWillUnmount() {
    document.removeEventListener('click', this._handleClick);
    document.removeEventListener('scroll', this._handleScroll);
  }
}

Category.propTypes = {
  history: PropTypes.object,
  getCategoryListApiCall: PropTypes.func,
  getHideShowCategory:PropTypes.func,
  createCategoryApiCall: PropTypes.func,
  editCategoryApiCall: PropTypes.func,
  deleteCategoryApiCall: PropTypes.func,
  createSubCategoryApiCall: PropTypes.func,
  updateSubCategoryApiCall: PropTypes.func,
  deleteSubCategoryApiCall: PropTypes.func,
  defaulltEntryApiCall: PropTypes.func,
  arrCategoryList: PropTypes.array,
  showToast: PropTypes.any,
};

export default compose(container)(Category);
