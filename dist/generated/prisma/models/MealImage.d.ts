import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model MealImage
 *
 */
export type MealImageModel = runtime.Types.Result.DefaultSelection<Prisma.$MealImagePayload>;
export type AggregateMealImage = {
    _count: MealImageCountAggregateOutputType | null;
    _avg: MealImageAvgAggregateOutputType | null;
    _sum: MealImageSumAggregateOutputType | null;
    _min: MealImageMinAggregateOutputType | null;
    _max: MealImageMaxAggregateOutputType | null;
};
export type MealImageAvgAggregateOutputType = {
    id: number | null;
    mealId: number | null;
};
export type MealImageSumAggregateOutputType = {
    id: number | null;
    mealId: number | null;
};
export type MealImageMinAggregateOutputType = {
    id: number | null;
    mealId: number | null;
    image: string | null;
};
export type MealImageMaxAggregateOutputType = {
    id: number | null;
    mealId: number | null;
    image: string | null;
};
export type MealImageCountAggregateOutputType = {
    id: number;
    mealId: number;
    image: number;
    _all: number;
};
export type MealImageAvgAggregateInputType = {
    id?: true;
    mealId?: true;
};
export type MealImageSumAggregateInputType = {
    id?: true;
    mealId?: true;
};
export type MealImageMinAggregateInputType = {
    id?: true;
    mealId?: true;
    image?: true;
};
export type MealImageMaxAggregateInputType = {
    id?: true;
    mealId?: true;
    image?: true;
};
export type MealImageCountAggregateInputType = {
    id?: true;
    mealId?: true;
    image?: true;
    _all?: true;
};
export type MealImageAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which MealImage to aggregate.
     */
    where?: Prisma.MealImageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MealImages to fetch.
     */
    orderBy?: Prisma.MealImageOrderByWithRelationInput | Prisma.MealImageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.MealImageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MealImages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MealImages.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned MealImages
    **/
    _count?: true | MealImageCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: MealImageAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: MealImageSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: MealImageMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: MealImageMaxAggregateInputType;
};
export type GetMealImageAggregateType<T extends MealImageAggregateArgs> = {
    [P in keyof T & keyof AggregateMealImage]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMealImage[P]> : Prisma.GetScalarType<T[P], AggregateMealImage[P]>;
};
export type MealImageGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MealImageWhereInput;
    orderBy?: Prisma.MealImageOrderByWithAggregationInput | Prisma.MealImageOrderByWithAggregationInput[];
    by: Prisma.MealImageScalarFieldEnum[] | Prisma.MealImageScalarFieldEnum;
    having?: Prisma.MealImageScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MealImageCountAggregateInputType | true;
    _avg?: MealImageAvgAggregateInputType;
    _sum?: MealImageSumAggregateInputType;
    _min?: MealImageMinAggregateInputType;
    _max?: MealImageMaxAggregateInputType;
};
export type MealImageGroupByOutputType = {
    id: number;
    mealId: number;
    image: string;
    _count: MealImageCountAggregateOutputType | null;
    _avg: MealImageAvgAggregateOutputType | null;
    _sum: MealImageSumAggregateOutputType | null;
    _min: MealImageMinAggregateOutputType | null;
    _max: MealImageMaxAggregateOutputType | null;
};
type GetMealImageGroupByPayload<T extends MealImageGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MealImageGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MealImageGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MealImageGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MealImageGroupByOutputType[P]>;
}>>;
export type MealImageWhereInput = {
    AND?: Prisma.MealImageWhereInput | Prisma.MealImageWhereInput[];
    OR?: Prisma.MealImageWhereInput[];
    NOT?: Prisma.MealImageWhereInput | Prisma.MealImageWhereInput[];
    id?: Prisma.IntFilter<"MealImage"> | number;
    mealId?: Prisma.IntFilter<"MealImage"> | number;
    image?: Prisma.StringFilter<"MealImage"> | string;
    meal?: Prisma.XOR<Prisma.MealScalarRelationFilter, Prisma.MealWhereInput>;
};
export type MealImageOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    mealId?: Prisma.SortOrder;
    image?: Prisma.SortOrder;
    meal?: Prisma.MealOrderByWithRelationInput;
};
export type MealImageWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.MealImageWhereInput | Prisma.MealImageWhereInput[];
    OR?: Prisma.MealImageWhereInput[];
    NOT?: Prisma.MealImageWhereInput | Prisma.MealImageWhereInput[];
    mealId?: Prisma.IntFilter<"MealImage"> | number;
    image?: Prisma.StringFilter<"MealImage"> | string;
    meal?: Prisma.XOR<Prisma.MealScalarRelationFilter, Prisma.MealWhereInput>;
}, "id">;
export type MealImageOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    mealId?: Prisma.SortOrder;
    image?: Prisma.SortOrder;
    _count?: Prisma.MealImageCountOrderByAggregateInput;
    _avg?: Prisma.MealImageAvgOrderByAggregateInput;
    _max?: Prisma.MealImageMaxOrderByAggregateInput;
    _min?: Prisma.MealImageMinOrderByAggregateInput;
    _sum?: Prisma.MealImageSumOrderByAggregateInput;
};
export type MealImageScalarWhereWithAggregatesInput = {
    AND?: Prisma.MealImageScalarWhereWithAggregatesInput | Prisma.MealImageScalarWhereWithAggregatesInput[];
    OR?: Prisma.MealImageScalarWhereWithAggregatesInput[];
    NOT?: Prisma.MealImageScalarWhereWithAggregatesInput | Prisma.MealImageScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"MealImage"> | number;
    mealId?: Prisma.IntWithAggregatesFilter<"MealImage"> | number;
    image?: Prisma.StringWithAggregatesFilter<"MealImage"> | string;
};
export type MealImageCreateInput = {
    image: string;
    meal: Prisma.MealCreateNestedOneWithoutImagesInput;
};
export type MealImageUncheckedCreateInput = {
    id?: number;
    mealId: number;
    image: string;
};
export type MealImageUpdateInput = {
    image?: Prisma.StringFieldUpdateOperationsInput | string;
    meal?: Prisma.MealUpdateOneRequiredWithoutImagesNestedInput;
};
export type MealImageUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    mealId?: Prisma.IntFieldUpdateOperationsInput | number;
    image?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type MealImageCreateManyInput = {
    id?: number;
    mealId: number;
    image: string;
};
export type MealImageUpdateManyMutationInput = {
    image?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type MealImageUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    mealId?: Prisma.IntFieldUpdateOperationsInput | number;
    image?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type MealImageListRelationFilter = {
    every?: Prisma.MealImageWhereInput;
    some?: Prisma.MealImageWhereInput;
    none?: Prisma.MealImageWhereInput;
};
export type MealImageOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type MealImageCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    mealId?: Prisma.SortOrder;
    image?: Prisma.SortOrder;
};
export type MealImageAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    mealId?: Prisma.SortOrder;
};
export type MealImageMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    mealId?: Prisma.SortOrder;
    image?: Prisma.SortOrder;
};
export type MealImageMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    mealId?: Prisma.SortOrder;
    image?: Prisma.SortOrder;
};
export type MealImageSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    mealId?: Prisma.SortOrder;
};
export type MealImageCreateNestedManyWithoutMealInput = {
    create?: Prisma.XOR<Prisma.MealImageCreateWithoutMealInput, Prisma.MealImageUncheckedCreateWithoutMealInput> | Prisma.MealImageCreateWithoutMealInput[] | Prisma.MealImageUncheckedCreateWithoutMealInput[];
    connectOrCreate?: Prisma.MealImageCreateOrConnectWithoutMealInput | Prisma.MealImageCreateOrConnectWithoutMealInput[];
    createMany?: Prisma.MealImageCreateManyMealInputEnvelope;
    connect?: Prisma.MealImageWhereUniqueInput | Prisma.MealImageWhereUniqueInput[];
};
export type MealImageUncheckedCreateNestedManyWithoutMealInput = {
    create?: Prisma.XOR<Prisma.MealImageCreateWithoutMealInput, Prisma.MealImageUncheckedCreateWithoutMealInput> | Prisma.MealImageCreateWithoutMealInput[] | Prisma.MealImageUncheckedCreateWithoutMealInput[];
    connectOrCreate?: Prisma.MealImageCreateOrConnectWithoutMealInput | Prisma.MealImageCreateOrConnectWithoutMealInput[];
    createMany?: Prisma.MealImageCreateManyMealInputEnvelope;
    connect?: Prisma.MealImageWhereUniqueInput | Prisma.MealImageWhereUniqueInput[];
};
export type MealImageUpdateManyWithoutMealNestedInput = {
    create?: Prisma.XOR<Prisma.MealImageCreateWithoutMealInput, Prisma.MealImageUncheckedCreateWithoutMealInput> | Prisma.MealImageCreateWithoutMealInput[] | Prisma.MealImageUncheckedCreateWithoutMealInput[];
    connectOrCreate?: Prisma.MealImageCreateOrConnectWithoutMealInput | Prisma.MealImageCreateOrConnectWithoutMealInput[];
    upsert?: Prisma.MealImageUpsertWithWhereUniqueWithoutMealInput | Prisma.MealImageUpsertWithWhereUniqueWithoutMealInput[];
    createMany?: Prisma.MealImageCreateManyMealInputEnvelope;
    set?: Prisma.MealImageWhereUniqueInput | Prisma.MealImageWhereUniqueInput[];
    disconnect?: Prisma.MealImageWhereUniqueInput | Prisma.MealImageWhereUniqueInput[];
    delete?: Prisma.MealImageWhereUniqueInput | Prisma.MealImageWhereUniqueInput[];
    connect?: Prisma.MealImageWhereUniqueInput | Prisma.MealImageWhereUniqueInput[];
    update?: Prisma.MealImageUpdateWithWhereUniqueWithoutMealInput | Prisma.MealImageUpdateWithWhereUniqueWithoutMealInput[];
    updateMany?: Prisma.MealImageUpdateManyWithWhereWithoutMealInput | Prisma.MealImageUpdateManyWithWhereWithoutMealInput[];
    deleteMany?: Prisma.MealImageScalarWhereInput | Prisma.MealImageScalarWhereInput[];
};
export type MealImageUncheckedUpdateManyWithoutMealNestedInput = {
    create?: Prisma.XOR<Prisma.MealImageCreateWithoutMealInput, Prisma.MealImageUncheckedCreateWithoutMealInput> | Prisma.MealImageCreateWithoutMealInput[] | Prisma.MealImageUncheckedCreateWithoutMealInput[];
    connectOrCreate?: Prisma.MealImageCreateOrConnectWithoutMealInput | Prisma.MealImageCreateOrConnectWithoutMealInput[];
    upsert?: Prisma.MealImageUpsertWithWhereUniqueWithoutMealInput | Prisma.MealImageUpsertWithWhereUniqueWithoutMealInput[];
    createMany?: Prisma.MealImageCreateManyMealInputEnvelope;
    set?: Prisma.MealImageWhereUniqueInput | Prisma.MealImageWhereUniqueInput[];
    disconnect?: Prisma.MealImageWhereUniqueInput | Prisma.MealImageWhereUniqueInput[];
    delete?: Prisma.MealImageWhereUniqueInput | Prisma.MealImageWhereUniqueInput[];
    connect?: Prisma.MealImageWhereUniqueInput | Prisma.MealImageWhereUniqueInput[];
    update?: Prisma.MealImageUpdateWithWhereUniqueWithoutMealInput | Prisma.MealImageUpdateWithWhereUniqueWithoutMealInput[];
    updateMany?: Prisma.MealImageUpdateManyWithWhereWithoutMealInput | Prisma.MealImageUpdateManyWithWhereWithoutMealInput[];
    deleteMany?: Prisma.MealImageScalarWhereInput | Prisma.MealImageScalarWhereInput[];
};
export type MealImageCreateWithoutMealInput = {
    image: string;
};
export type MealImageUncheckedCreateWithoutMealInput = {
    id?: number;
    image: string;
};
export type MealImageCreateOrConnectWithoutMealInput = {
    where: Prisma.MealImageWhereUniqueInput;
    create: Prisma.XOR<Prisma.MealImageCreateWithoutMealInput, Prisma.MealImageUncheckedCreateWithoutMealInput>;
};
export type MealImageCreateManyMealInputEnvelope = {
    data: Prisma.MealImageCreateManyMealInput | Prisma.MealImageCreateManyMealInput[];
    skipDuplicates?: boolean;
};
export type MealImageUpsertWithWhereUniqueWithoutMealInput = {
    where: Prisma.MealImageWhereUniqueInput;
    update: Prisma.XOR<Prisma.MealImageUpdateWithoutMealInput, Prisma.MealImageUncheckedUpdateWithoutMealInput>;
    create: Prisma.XOR<Prisma.MealImageCreateWithoutMealInput, Prisma.MealImageUncheckedCreateWithoutMealInput>;
};
export type MealImageUpdateWithWhereUniqueWithoutMealInput = {
    where: Prisma.MealImageWhereUniqueInput;
    data: Prisma.XOR<Prisma.MealImageUpdateWithoutMealInput, Prisma.MealImageUncheckedUpdateWithoutMealInput>;
};
export type MealImageUpdateManyWithWhereWithoutMealInput = {
    where: Prisma.MealImageScalarWhereInput;
    data: Prisma.XOR<Prisma.MealImageUpdateManyMutationInput, Prisma.MealImageUncheckedUpdateManyWithoutMealInput>;
};
export type MealImageScalarWhereInput = {
    AND?: Prisma.MealImageScalarWhereInput | Prisma.MealImageScalarWhereInput[];
    OR?: Prisma.MealImageScalarWhereInput[];
    NOT?: Prisma.MealImageScalarWhereInput | Prisma.MealImageScalarWhereInput[];
    id?: Prisma.IntFilter<"MealImage"> | number;
    mealId?: Prisma.IntFilter<"MealImage"> | number;
    image?: Prisma.StringFilter<"MealImage"> | string;
};
export type MealImageCreateManyMealInput = {
    id?: number;
    image: string;
};
export type MealImageUpdateWithoutMealInput = {
    image?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type MealImageUncheckedUpdateWithoutMealInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    image?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type MealImageUncheckedUpdateManyWithoutMealInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    image?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type MealImageSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    mealId?: boolean;
    image?: boolean;
    meal?: boolean | Prisma.MealDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["mealImage"]>;
export type MealImageSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    mealId?: boolean;
    image?: boolean;
    meal?: boolean | Prisma.MealDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["mealImage"]>;
export type MealImageSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    mealId?: boolean;
    image?: boolean;
    meal?: boolean | Prisma.MealDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["mealImage"]>;
export type MealImageSelectScalar = {
    id?: boolean;
    mealId?: boolean;
    image?: boolean;
};
export type MealImageOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "mealId" | "image", ExtArgs["result"]["mealImage"]>;
export type MealImageInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    meal?: boolean | Prisma.MealDefaultArgs<ExtArgs>;
};
export type MealImageIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    meal?: boolean | Prisma.MealDefaultArgs<ExtArgs>;
};
export type MealImageIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    meal?: boolean | Prisma.MealDefaultArgs<ExtArgs>;
};
export type $MealImagePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "MealImage";
    objects: {
        meal: Prisma.$MealPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        mealId: number;
        image: string;
    }, ExtArgs["result"]["mealImage"]>;
    composites: {};
};
export type MealImageGetPayload<S extends boolean | null | undefined | MealImageDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MealImagePayload, S>;
export type MealImageCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<MealImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MealImageCountAggregateInputType | true;
};
export interface MealImageDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['MealImage'];
        meta: {
            name: 'MealImage';
        };
    };
    /**
     * Find zero or one MealImage that matches the filter.
     * @param {MealImageFindUniqueArgs} args - Arguments to find a MealImage
     * @example
     * // Get one MealImage
     * const mealImage = await prisma.mealImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MealImageFindUniqueArgs>(args: Prisma.SelectSubset<T, MealImageFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MealImageClient<runtime.Types.Result.GetResult<Prisma.$MealImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one MealImage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MealImageFindUniqueOrThrowArgs} args - Arguments to find a MealImage
     * @example
     * // Get one MealImage
     * const mealImage = await prisma.mealImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MealImageFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MealImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MealImageClient<runtime.Types.Result.GetResult<Prisma.$MealImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first MealImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealImageFindFirstArgs} args - Arguments to find a MealImage
     * @example
     * // Get one MealImage
     * const mealImage = await prisma.mealImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MealImageFindFirstArgs>(args?: Prisma.SelectSubset<T, MealImageFindFirstArgs<ExtArgs>>): Prisma.Prisma__MealImageClient<runtime.Types.Result.GetResult<Prisma.$MealImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first MealImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealImageFindFirstOrThrowArgs} args - Arguments to find a MealImage
     * @example
     * // Get one MealImage
     * const mealImage = await prisma.mealImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MealImageFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MealImageFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MealImageClient<runtime.Types.Result.GetResult<Prisma.$MealImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more MealImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MealImages
     * const mealImages = await prisma.mealImage.findMany()
     *
     * // Get first 10 MealImages
     * const mealImages = await prisma.mealImage.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const mealImageWithIdOnly = await prisma.mealImage.findMany({ select: { id: true } })
     *
     */
    findMany<T extends MealImageFindManyArgs>(args?: Prisma.SelectSubset<T, MealImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MealImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a MealImage.
     * @param {MealImageCreateArgs} args - Arguments to create a MealImage.
     * @example
     * // Create one MealImage
     * const MealImage = await prisma.mealImage.create({
     *   data: {
     *     // ... data to create a MealImage
     *   }
     * })
     *
     */
    create<T extends MealImageCreateArgs>(args: Prisma.SelectSubset<T, MealImageCreateArgs<ExtArgs>>): Prisma.Prisma__MealImageClient<runtime.Types.Result.GetResult<Prisma.$MealImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many MealImages.
     * @param {MealImageCreateManyArgs} args - Arguments to create many MealImages.
     * @example
     * // Create many MealImages
     * const mealImage = await prisma.mealImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends MealImageCreateManyArgs>(args?: Prisma.SelectSubset<T, MealImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many MealImages and returns the data saved in the database.
     * @param {MealImageCreateManyAndReturnArgs} args - Arguments to create many MealImages.
     * @example
     * // Create many MealImages
     * const mealImage = await prisma.mealImage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many MealImages and only return the `id`
     * const mealImageWithIdOnly = await prisma.mealImage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends MealImageCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, MealImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MealImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a MealImage.
     * @param {MealImageDeleteArgs} args - Arguments to delete one MealImage.
     * @example
     * // Delete one MealImage
     * const MealImage = await prisma.mealImage.delete({
     *   where: {
     *     // ... filter to delete one MealImage
     *   }
     * })
     *
     */
    delete<T extends MealImageDeleteArgs>(args: Prisma.SelectSubset<T, MealImageDeleteArgs<ExtArgs>>): Prisma.Prisma__MealImageClient<runtime.Types.Result.GetResult<Prisma.$MealImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one MealImage.
     * @param {MealImageUpdateArgs} args - Arguments to update one MealImage.
     * @example
     * // Update one MealImage
     * const mealImage = await prisma.mealImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends MealImageUpdateArgs>(args: Prisma.SelectSubset<T, MealImageUpdateArgs<ExtArgs>>): Prisma.Prisma__MealImageClient<runtime.Types.Result.GetResult<Prisma.$MealImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more MealImages.
     * @param {MealImageDeleteManyArgs} args - Arguments to filter MealImages to delete.
     * @example
     * // Delete a few MealImages
     * const { count } = await prisma.mealImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends MealImageDeleteManyArgs>(args?: Prisma.SelectSubset<T, MealImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more MealImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MealImages
     * const mealImage = await prisma.mealImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends MealImageUpdateManyArgs>(args: Prisma.SelectSubset<T, MealImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more MealImages and returns the data updated in the database.
     * @param {MealImageUpdateManyAndReturnArgs} args - Arguments to update many MealImages.
     * @example
     * // Update many MealImages
     * const mealImage = await prisma.mealImage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more MealImages and only return the `id`
     * const mealImageWithIdOnly = await prisma.mealImage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends MealImageUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, MealImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MealImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one MealImage.
     * @param {MealImageUpsertArgs} args - Arguments to update or create a MealImage.
     * @example
     * // Update or create a MealImage
     * const mealImage = await prisma.mealImage.upsert({
     *   create: {
     *     // ... data to create a MealImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MealImage we want to update
     *   }
     * })
     */
    upsert<T extends MealImageUpsertArgs>(args: Prisma.SelectSubset<T, MealImageUpsertArgs<ExtArgs>>): Prisma.Prisma__MealImageClient<runtime.Types.Result.GetResult<Prisma.$MealImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of MealImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealImageCountArgs} args - Arguments to filter MealImages to count.
     * @example
     * // Count the number of MealImages
     * const count = await prisma.mealImage.count({
     *   where: {
     *     // ... the filter for the MealImages we want to count
     *   }
     * })
    **/
    count<T extends MealImageCountArgs>(args?: Prisma.Subset<T, MealImageCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MealImageCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a MealImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MealImageAggregateArgs>(args: Prisma.Subset<T, MealImageAggregateArgs>): Prisma.PrismaPromise<GetMealImageAggregateType<T>>;
    /**
     * Group by MealImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealImageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends MealImageGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: MealImageGroupByArgs['orderBy'];
    } : {
        orderBy?: MealImageGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, MealImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMealImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the MealImage model
     */
    readonly fields: MealImageFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for MealImage.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__MealImageClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    meal<T extends Prisma.MealDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.MealDefaultArgs<ExtArgs>>): Prisma.Prisma__MealClient<runtime.Types.Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the MealImage model
 */
export interface MealImageFieldRefs {
    readonly id: Prisma.FieldRef<"MealImage", 'Int'>;
    readonly mealId: Prisma.FieldRef<"MealImage", 'Int'>;
    readonly image: Prisma.FieldRef<"MealImage", 'String'>;
}
/**
 * MealImage findUnique
 */
export type MealImageFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealImage
     */
    select?: Prisma.MealImageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MealImage
     */
    omit?: Prisma.MealImageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MealImageInclude<ExtArgs> | null;
    /**
     * Filter, which MealImage to fetch.
     */
    where: Prisma.MealImageWhereUniqueInput;
};
/**
 * MealImage findUniqueOrThrow
 */
export type MealImageFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealImage
     */
    select?: Prisma.MealImageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MealImage
     */
    omit?: Prisma.MealImageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MealImageInclude<ExtArgs> | null;
    /**
     * Filter, which MealImage to fetch.
     */
    where: Prisma.MealImageWhereUniqueInput;
};
/**
 * MealImage findFirst
 */
export type MealImageFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealImage
     */
    select?: Prisma.MealImageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MealImage
     */
    omit?: Prisma.MealImageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MealImageInclude<ExtArgs> | null;
    /**
     * Filter, which MealImage to fetch.
     */
    where?: Prisma.MealImageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MealImages to fetch.
     */
    orderBy?: Prisma.MealImageOrderByWithRelationInput | Prisma.MealImageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for MealImages.
     */
    cursor?: Prisma.MealImageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MealImages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MealImages.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of MealImages.
     */
    distinct?: Prisma.MealImageScalarFieldEnum | Prisma.MealImageScalarFieldEnum[];
};
/**
 * MealImage findFirstOrThrow
 */
export type MealImageFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealImage
     */
    select?: Prisma.MealImageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MealImage
     */
    omit?: Prisma.MealImageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MealImageInclude<ExtArgs> | null;
    /**
     * Filter, which MealImage to fetch.
     */
    where?: Prisma.MealImageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MealImages to fetch.
     */
    orderBy?: Prisma.MealImageOrderByWithRelationInput | Prisma.MealImageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for MealImages.
     */
    cursor?: Prisma.MealImageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MealImages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MealImages.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of MealImages.
     */
    distinct?: Prisma.MealImageScalarFieldEnum | Prisma.MealImageScalarFieldEnum[];
};
/**
 * MealImage findMany
 */
export type MealImageFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealImage
     */
    select?: Prisma.MealImageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MealImage
     */
    omit?: Prisma.MealImageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MealImageInclude<ExtArgs> | null;
    /**
     * Filter, which MealImages to fetch.
     */
    where?: Prisma.MealImageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MealImages to fetch.
     */
    orderBy?: Prisma.MealImageOrderByWithRelationInput | Prisma.MealImageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing MealImages.
     */
    cursor?: Prisma.MealImageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MealImages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MealImages.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of MealImages.
     */
    distinct?: Prisma.MealImageScalarFieldEnum | Prisma.MealImageScalarFieldEnum[];
};
/**
 * MealImage create
 */
export type MealImageCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealImage
     */
    select?: Prisma.MealImageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MealImage
     */
    omit?: Prisma.MealImageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MealImageInclude<ExtArgs> | null;
    /**
     * The data needed to create a MealImage.
     */
    data: Prisma.XOR<Prisma.MealImageCreateInput, Prisma.MealImageUncheckedCreateInput>;
};
/**
 * MealImage createMany
 */
export type MealImageCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many MealImages.
     */
    data: Prisma.MealImageCreateManyInput | Prisma.MealImageCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * MealImage createManyAndReturn
 */
export type MealImageCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealImage
     */
    select?: Prisma.MealImageSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the MealImage
     */
    omit?: Prisma.MealImageOmit<ExtArgs> | null;
    /**
     * The data used to create many MealImages.
     */
    data: Prisma.MealImageCreateManyInput | Prisma.MealImageCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MealImageIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * MealImage update
 */
export type MealImageUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealImage
     */
    select?: Prisma.MealImageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MealImage
     */
    omit?: Prisma.MealImageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MealImageInclude<ExtArgs> | null;
    /**
     * The data needed to update a MealImage.
     */
    data: Prisma.XOR<Prisma.MealImageUpdateInput, Prisma.MealImageUncheckedUpdateInput>;
    /**
     * Choose, which MealImage to update.
     */
    where: Prisma.MealImageWhereUniqueInput;
};
/**
 * MealImage updateMany
 */
export type MealImageUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update MealImages.
     */
    data: Prisma.XOR<Prisma.MealImageUpdateManyMutationInput, Prisma.MealImageUncheckedUpdateManyInput>;
    /**
     * Filter which MealImages to update
     */
    where?: Prisma.MealImageWhereInput;
    /**
     * Limit how many MealImages to update.
     */
    limit?: number;
};
/**
 * MealImage updateManyAndReturn
 */
export type MealImageUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealImage
     */
    select?: Prisma.MealImageSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the MealImage
     */
    omit?: Prisma.MealImageOmit<ExtArgs> | null;
    /**
     * The data used to update MealImages.
     */
    data: Prisma.XOR<Prisma.MealImageUpdateManyMutationInput, Prisma.MealImageUncheckedUpdateManyInput>;
    /**
     * Filter which MealImages to update
     */
    where?: Prisma.MealImageWhereInput;
    /**
     * Limit how many MealImages to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MealImageIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * MealImage upsert
 */
export type MealImageUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealImage
     */
    select?: Prisma.MealImageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MealImage
     */
    omit?: Prisma.MealImageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MealImageInclude<ExtArgs> | null;
    /**
     * The filter to search for the MealImage to update in case it exists.
     */
    where: Prisma.MealImageWhereUniqueInput;
    /**
     * In case the MealImage found by the `where` argument doesn't exist, create a new MealImage with this data.
     */
    create: Prisma.XOR<Prisma.MealImageCreateInput, Prisma.MealImageUncheckedCreateInput>;
    /**
     * In case the MealImage was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.MealImageUpdateInput, Prisma.MealImageUncheckedUpdateInput>;
};
/**
 * MealImage delete
 */
export type MealImageDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealImage
     */
    select?: Prisma.MealImageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MealImage
     */
    omit?: Prisma.MealImageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MealImageInclude<ExtArgs> | null;
    /**
     * Filter which MealImage to delete.
     */
    where: Prisma.MealImageWhereUniqueInput;
};
/**
 * MealImage deleteMany
 */
export type MealImageDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which MealImages to delete
     */
    where?: Prisma.MealImageWhereInput;
    /**
     * Limit how many MealImages to delete.
     */
    limit?: number;
};
/**
 * MealImage without action
 */
export type MealImageDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealImage
     */
    select?: Prisma.MealImageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MealImage
     */
    omit?: Prisma.MealImageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MealImageInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=MealImage.d.ts.map